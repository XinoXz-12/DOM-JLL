export class TextFile {
    // propiedades
    // constructor
    constructor(filename, content) {
        this.filename = filename;
        this.content = content;
    }

    // métodos
    saveFile() {
        const file = new File([this.content], this.filename);
        const url = URL.createObjectURL(file);

        const link = document.createElement("a");
        link.href = url;
        link.download = "datos.txt";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    }
}