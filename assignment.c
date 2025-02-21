#include<stdio.h>
int main()
{

    int num;
    printf("Enter a integer number");
    scanf("%d",&num);
    num % 2 == 0 ? printf("This is a even number") : printf("This is an odd number");
    return 0;


}