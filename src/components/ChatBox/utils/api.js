// src/components/ChatBox/utils/api.js

import axios from 'axios';

// Default backend API URL, can be overridden by component props
const DEFAULT_API_BASE_URL = 'http://localhost:8000';

let _glossaryCache = null;

const loadGlossaryIndex = async () => {
  if (_glossaryCache) return _glossaryCache;
  try {
    // static files are served at site root in Docusaurus
    const resp = await axios.get('/glossary-index.json');
    _glossaryCache = resp.data;
    return _glossaryCache;
  } catch (err) {
    console.warn('Could not load local glossary index:', err);
    _glossaryCache = null;
    return null;
  }
};

const localSearch = async (question) => {
  const idx = await loadGlossaryIndex();
  if (!idx || !Array.isArray(idx.terms)) {
    return { answer_text: "No local sources available.", source_urls: [] };
  }
  const q = question.toLowerCase();
  const scored = idx.terms.map((t) => {
    const text = ((t.term || '') + ' ' + (t.definition || '')).toLowerCase();
    let score = 0;
    if (text.includes(q)) score += 10;
    // count word matches
    const qWords = q.split(/\s+/).filter(Boolean);
    qWords.forEach((w) => { if (text.includes(w)) score += 1; });
    return { t, score };
  }).filter(s => s.score > 0).sort((a,b) => b.score - a.score);

  if (scored.length === 0) {
    return { answer_text: "I couldn't find an exact match in the local sources. Try rephrasing the question.", source_urls: [] };
  }

  // build a short answer from top 3 hits
  const top = scored.slice(0,3);
  const answerParts = top.map((hit) => `**${hit.t.term}**: ${hit.t.definition}`);
  const source_urls = top.map((hit) => {
    // convert glossary id to likely docs path
    let id = (hit.t.id || '').replace(/(^\.|\/)*/g, '');
    const link = hit.t.id && hit.t.id.startsWith('http') ? hit.t.id : `../glossary#${id}`;
    return link;
  });
  return { answer_text: answerParts.join('\n\n'), source_urls };
};

/**
 * Posts a question to the backend QA API; falls back to local project sources.
 */
export const postQuestion = async (question, url = null, backendApiUrl = DEFAULT_API_BASE_URL) => {
  const payload = { question };
  if (url) payload.url = url;
  // If no backend specified, use local search
  if (!backendApiUrl) {
    return await localSearch(question);
  }

  try {
    const response = await axios.post(`${backendApiUrl}/qa`, payload, { timeout: 5000 });
    return response.data;
  } catch (error) {
    console.warn('Backend QA unavailable, falling back to local sources:', error.message || error);
    // fallback to local search
    return await localSearch(question);
  }
};

/**
 * Fetches the list of managed sources from the backend API.
 */
export const fetchSources = async (backendApiUrl = DEFAULT_API_BASE_URL) => {
  try {
    const response = await axios.get(`${backendApiUrl}/sources`);
    return response.data;
  } catch (error) {
    console.error('Error fetching sources from backend:', error);
    throw error;
  }
};

export const addSource = async (url, backendApiUrl = DEFAULT_API_BASE_URL) => {
  try {
    const response = await axios.post(`${backendApiUrl}/sources`, { url });
    return response.data;
  } catch (error) {
    console.error('Error adding source to backend:', error);
    throw error;
  }
};

export const removeSource = async (sourceId, backendApiUrl = DEFAULT_API_BASE_URL) => {
  try {
    const response = await axios.delete(`${backendApiUrl}/sources/${sourceId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing source from backend:', error);
    throw error;
  }
};
