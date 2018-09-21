#include <iostream>
#include <fstream>

#define LIM 100

using namespace std;

int main()
{
    archivo.open("data.txt",ios::in);

    if (archivo.is_open())
    {
      string var;
      archivo >> var;
        while(!archivo.eof())
        {
          cout << var << " ";
          archivo >> var;

        }


    }


}
