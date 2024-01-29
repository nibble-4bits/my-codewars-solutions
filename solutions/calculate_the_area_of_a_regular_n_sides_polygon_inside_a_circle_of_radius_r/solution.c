#import <math.h>

double PI = 3.141592653589793; // Use this value as pi in your calculations if necessary
double area_of_polygon_inside_circle(double r, int n) {
  double area = (n * r * r / 2) * sin(2 * PI / n);
  return round(area * 1000) / 1000;
}