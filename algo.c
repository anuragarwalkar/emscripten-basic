#include <stdio.h>
#include <emscripten.h>

/* Function to print an array */
EMSCRIPTEN_KEEPALIVE
void printArray(int arr[], int size)
{
    int i;
    for (i=0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}
 
