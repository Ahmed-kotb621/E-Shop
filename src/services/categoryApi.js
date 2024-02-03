export async function getCatogories() {
  try {
    const res = await fetch(
      `https://ahmed-kotb621.github.io/host_api/data.json`,
    );
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
