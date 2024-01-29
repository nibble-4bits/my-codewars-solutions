#define begin {
#define end }
#define repeat do {
#define until(exp) } while (!(exp))

int fromPascalToCpp(int Sum, int finish, int start)
{
	begin
		repeat
		  Sum = Sum + start;
	    start = start + 1;
	  until(start>=finish);
	end;
	return Sum;
}