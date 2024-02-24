const uploadUrl = 'https://api-vercel-test-one.vercel.app/dreamboost/upload';
// Custom adapter class
class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      (file) => new Promise((resolve, reject) => {
        this.initRequest();
        this.initListeners(resolve, reject, file);
        this.sendRequest(file);
      }),
    );
  }

  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  initRequest() {
    const xhr = new XMLHttpRequest();
    this.xhr = xhr;

    xhr.open('POST', uploadUrl, true);

    xhr.setRequestHeader(
      'Authorization',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QxMTExQGdtYWlsLmNvbSIsInVzZXJJRCI6IjQ4NzRiNTM2LWM2MmYtNGQ3ZS05MzExLWU1YjJkNTVhYjUyYSIsImlhdCI6MTcwODY5MTA0MSwiZXhwIjoxNzA5Mjk1ODQxfQ.8Das-QKINaBu9SigBU_SHaeLjK2nvg-IEjH-VGUxlJc',
    );

    xhr.responseType = 'json';
  }

  initListeners(resolve, reject, file) {
    const { xhr } = this;
    const { loader } = this;
    const genericErrorText = `Couldn't upload file: ${file.name}.`;

    xhr.addEventListener('error', () => reject(genericErrorText));
    xhr.addEventListener('abort', () => reject());
    xhr.addEventListener('load', () => {
      const { response } = xhr;

      if (!response || response.error) {
        return reject(
          response && response.error ? response.error.message : genericErrorText,
        );
      }

      return resolve({
        default: response.data.result,
      });
    });

    if (xhr.upload) {
      xhr.upload.addEventListener('progress', (evt) => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  async sendRequest(file) {
    const data = new FormData();

    data.append('image', file);

    this.xhr.send(data);
  }
}

export default function MyCustomUploadAdapterPlugin(editor) {
  const newEditor = editor;
  newEditor.plugins.get('FileRepository').createUploadAdapter = (loader) => new MyUploadAdapter(loader);
}
