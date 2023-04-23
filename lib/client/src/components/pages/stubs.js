const stubs = {};

stubs.cpp = `#include <iostream>
#include <stdio.h>
using namespace std;
int main() {
  cout<<"Hello world!\\n";
  return 0;
}
`;

stubs.py = `if __name__ == '__main__':
app.run(port=5555, debug=True)`;

export default stubs;