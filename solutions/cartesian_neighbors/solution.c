#include <stdlib.h>

int **cartesian_neighbor(int x, int y) {
  int num_neighbors = 8;
  int **neighbors = (int**)calloc(num_neighbors, sizeof(int *));

  for (int i = 0; i < num_neighbors; i++) {
    neighbors[i] = (int*)calloc(2, sizeof(int));
  }

  neighbors[0][0] = x - 1;
  neighbors[0][1] = y - 1;

  neighbors[1][0] = x - 1;
  neighbors[1][1] = y;

  neighbors[2][0] = x - 1;
  neighbors[2][1] = y + 1;

  neighbors[3][0] = x;
  neighbors[3][1] = y - 1;

  neighbors[4][0] = x;
  neighbors[4][1] = y + 1;

  neighbors[5][0] = x + 1;
  neighbors[5][1] = y - 1;

  neighbors[6][0] = x + 1;
  neighbors[6][1] = y;

  neighbors[7][0] = x + 1;
  neighbors[7][1] = y + 1;

  return neighbors;
}