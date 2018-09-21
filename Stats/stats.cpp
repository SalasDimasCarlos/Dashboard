#include <iostream>
#include <fstream>
#include <string>


#define CTRL 64

using namespace std;

/*

  char let = 'Z';
  int x = let;
   cout << x << endl;

  pos = linea.find("|");
  cout << pos << endl;
  linea = linea.substr(pos);
  cout << linea << endl << "SPACE: " << count << endl;
  count ++;
  if(pos < 0)
  {
    break;
  }
*/
int main()
{
    ifstream archivo;
    archivo.open("data.txt",ios::in);
    int contador = 1;
    if (archivo.is_open())
    {
      string linea;
      int count = 0;
      int pos = -1;
        while(getline(archivo,linea))
        {
          if (contador == 1)
          {


            
          }
          pos = linea.find("|1 Solicitud|");
          if(pos > 0)
          {
            count++;
          }
          pos = 0;
          linea = "";
          contador++;
        }
        cout << "Total: " << count << endl;


    }

    return 0;
}
