export const Merriweather = {
  normal: "public/fonts/merriweather/merriweather-v21-latin-regular.ttf",
  bold: "public/fonts/merriweather/merriweather-v21-latin-700.ttf",
  italic: "public/fonts/merriweather/merriweather-v21-latin-italic.ttf",
  bolditalic: "public/fonts/merriweather/merriweather-v21-latin-700italic.ttf",
};

export const createFontsVfs = async () => {
  const normal = await base64convert(Merriweather.normal);
  const bold = await base64convert(Merriweather.bold);
  const italic = await base64convert(Merriweather.italic);
  const bolditalic = await base64convert(Merriweather.bolditalic);

  return {
    "Merriweather-Regular.ttf": normal,
    "Merriweather-Bold.ttf": bold,
    "Merriweather-Italic.ttf": italic,
    "Merriweather-BoldItalic.ttf": bolditalic,
  };
};

async function base64convert(url: string): Promise<string> {
  const reader = new FileReader();
  let response = await fetch(url);
  let data = await response.blob();

  reader.readAsDataURL(data);

  return new Promise((resolve) => {
    reader.onload = (e) => {
      const base64 = String(e?.target?.result).replace(
        "data:application/x-font-ttf;base64,",
        ""
      );
      resolve(base64);
    };
  });
}
