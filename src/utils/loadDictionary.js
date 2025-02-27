const loadDictionary = async () => {
  try {
    const response = await fetch('src/data/dictionary.json');
    if (!response.ok) throw new Error('Gagal memuat kamus');
    const json = await response.json();
    return json.dictionary;
  } catch (error) {
    console.error('Error memuat kamus:', error);
    return [];
  }
};

export default loadDictionary;