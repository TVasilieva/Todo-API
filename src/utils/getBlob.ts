const getBlob = (image: Blob | string): string | undefined => {
  if (image) {
    let url: string = "";
    try {
      url = URL.createObjectURL(image as Blob | MediaSource | File);
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 0);
      return url;
    } catch (e) {
      console.log(e);
    }
  }
};

export default getBlob;
