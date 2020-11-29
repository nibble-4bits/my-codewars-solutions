// It is pretty useful to look at the definition of the Computer constructor function
// console.log(createComputer.toString());

let whateverIWantTheTokenToBe = Math.random();

Computer.login('admin', 'asm@t1c');
Computer.executeCommand( 'help' );
Computer.executeCommand( 'ls' );
Computer.executeCommand( 'open system/log' );

Computer.executeCommand( 'create modifyToken.js token=' + whateverIWantTheTokenToBe );
Computer.executeCommand( 'run modifyToken.js' );

Computer.executeCommand( 'create changeDBPermission.js server_files["www/data/users.db"].rights = "none"' );
Computer.executeCommand( 'run changeDBPermission.js' );

Computer.executeCommand( 'post 156.413.208.132/admin/login login=Quark&password=quarki&token=' + whateverIWantTheTokenToBe );
Computer.executeCommand( 'server ls' );

file = Computer.executeCommand( 'server open www/data/users.db' );