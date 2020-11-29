class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        /* 
          Regex explanation:
          -Find any word that includes alphanumeric, hyphen and underscore characters
          -That is preceded by an underscore or a dot
        */
        let regex = /(?<=[_\.])[\w-]+/g;
        let filename, extension;
        
        [filename, extension] = dirtyFileName.match(regex);
        return `${ filename }.${extension}`;
    }
}