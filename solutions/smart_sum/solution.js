function smartSum(...args){
  if (!args.length) return 0;
  else if (Array.isArray(args[0])) return smartSum(...args[0].concat(args.slice(1)));
  else return args[0] + smartSum(...args.slice(1));
}