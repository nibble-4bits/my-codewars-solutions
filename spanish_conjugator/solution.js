function conjugate(verb){
  let radical = verb.slice(0, verb.length - 2);
  let terminacion = verb.slice(verb.length - 2);
  let obj = {};
  
  if (terminacion === 'ar') {
    obj[verb] = [`${radical}o`,
                    `${radical}as`,
                    `${radical}a`,
                    `${radical}amos`,
                    `${radical}áis`,
                    `${radical}an`];
  }
  else if (terminacion === 'er') {
    obj[verb] = [`${radical}o`,
                    `${radical}es`,
                    `${radical}e`,
                    `${radical}emos`,
                    `${radical}éis`,
                    `${radical}en`];
  }
  else if (terminacion === 'ir') {
    obj[verb] = [`${radical}o`,
                    `${radical}es`,
                    `${radical}e`,
                    `${radical}imos`,
                    `${radical}ís`,
                    `${radical}en`];
  }
  return obj;
}