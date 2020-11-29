function linuxType(fileAttribute) {
  const filetypes = {
    '-': 'file',
    'd': 'directory',
    'l': 'symlink',
    'c': 'character_file',
    'b': 'block_file',
    'p': 'pipe',
    's': 'socket',
    'D': 'door'
  };
  
  return filetypes[fileAttribute[0]];
}