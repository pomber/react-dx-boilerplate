export const clockService = {
  getTime: async () => {
    const res = await fetch("/api/time/foo");
    const json = await res.json();

    return json.time;
  }
};
