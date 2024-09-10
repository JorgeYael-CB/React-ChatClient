interface Props {
  file: File;
}

export const FileToBase64 = ({ file }: Props): Promise<string> => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = (event) => {
      if (event.target && event.target.result) {
        resolve(event.target.result as string);
      } else {
        reject("No se pudo convertir el archivo a base64.");
      }
    };

    reader.onerror = () => {
      reject("Error al leer el archivo.");
    };

    reader.readAsDataURL(file);
  });
};
