try {
  setTimeout(() => console.log("A"), 500);
  setTimeout(() => console.log("B"), 0);
  setTimeout(() => {
    throw new Error("C");
  }, 1000);
  setTimeout(() => console.log("D"), 500);

  console.log("E");
} catch (error) {}

// pile d'appel
// ^
// |
// |
// |try {st - st - st - st - lg }    lg               lg    lg           lg
// |(anonymous)                 ⟳   cbB  ⟳           cbA - cbD  ⟳      cbC
// +----------------------------3ms---------------500ms--------------1000ms-> temps
//                      E       B                 A      D           C

// file d'attente (0ms) : cbB
// file d'attente (3ms) :
// file d'attente (500ms) : cbA - cbD
// file d'attente (501ms) : cbD
// file d'attente (502ms) :
// file d'attente (1000ms) : cbC
// file d'attente (1001ms) :
