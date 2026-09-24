// Generated from grammar/GISGrammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import GISGrammarListener from './GISGrammarListener.js';
import GISGrammarVisitor from './GISGrammarVisitor.js';

const serializedATN = [4,1,65,484,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,1,0,4,0,96,8,0,11,0,12,
0,97,1,1,1,1,1,1,1,1,3,1,104,8,1,1,2,1,2,1,2,1,2,3,2,110,8,2,1,3,1,3,1,3,
1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,124,8,4,10,4,12,4,127,9,4,1,4,1,
4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,139,8,5,1,6,1,6,1,6,1,6,1,6,3,6,146,
8,6,1,6,1,6,1,6,1,6,1,6,5,6,153,8,6,10,6,12,6,156,9,6,1,6,1,6,1,6,1,7,1,
7,1,7,1,8,1,8,1,8,1,8,1,8,3,8,169,8,8,1,8,1,8,1,8,3,8,174,8,8,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,3,9,195,
8,9,1,9,3,9,198,8,9,1,9,3,9,201,8,9,1,9,3,9,204,8,9,1,9,3,9,207,8,9,1,9,
3,9,210,8,9,1,9,3,9,213,8,9,1,9,1,9,3,9,217,8,9,1,9,3,9,220,8,9,1,9,3,9,
223,8,9,1,9,1,9,3,9,227,8,9,1,9,3,9,230,8,9,1,9,3,9,233,8,9,1,9,1,9,3,9,
237,8,9,1,10,1,10,1,10,1,10,1,10,1,10,3,10,245,8,10,1,10,3,10,248,8,10,1,
10,3,10,251,8,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,3,11,261,8,11,1,
11,1,11,1,11,1,11,5,11,267,8,11,10,11,12,11,270,9,11,1,11,1,11,1,11,1,12,
1,12,1,12,1,12,1,12,3,12,280,8,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,288,
8,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,299,8,13,1,13,3,13,
302,8,13,1,13,3,13,305,8,13,1,13,3,13,308,8,13,1,13,3,13,311,8,13,1,13,3,
13,314,8,13,1,13,3,13,317,8,13,3,13,319,8,13,1,14,1,14,1,14,1,15,1,15,1,
15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,
1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,
22,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,
1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,1,
29,3,29,385,8,29,1,29,1,29,1,29,1,29,5,29,391,8,29,10,29,12,29,394,9,29,
1,29,1,29,1,29,1,30,1,30,3,30,401,8,30,1,30,3,30,404,8,30,1,31,1,31,1,31,
1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,5,33,422,
8,33,10,33,12,33,425,9,33,1,33,1,33,1,33,1,34,1,34,1,34,1,35,1,35,3,35,435,
8,35,1,36,1,36,1,36,5,36,440,8,36,10,36,12,36,443,9,36,1,36,1,36,3,36,447,
8,36,1,37,1,37,3,37,451,8,37,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,
1,39,1,39,1,39,1,39,1,39,1,39,3,39,468,8,39,1,40,1,40,1,41,1,41,1,42,1,42,
1,43,1,43,1,44,1,44,1,45,1,45,1,46,1,46,1,46,0,0,47,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
66,68,70,72,74,76,78,80,82,84,86,88,90,92,0,2,2,0,7,7,9,11,1,0,48,51,495,
0,95,1,0,0,0,2,103,1,0,0,0,4,105,1,0,0,0,6,111,1,0,0,0,8,117,1,0,0,0,10,
138,1,0,0,0,12,140,1,0,0,0,14,160,1,0,0,0,16,163,1,0,0,0,18,190,1,0,0,0,
20,238,1,0,0,0,22,255,1,0,0,0,24,274,1,0,0,0,26,318,1,0,0,0,28,320,1,0,0,
0,30,323,1,0,0,0,32,327,1,0,0,0,34,331,1,0,0,0,36,335,1,0,0,0,38,339,1,0,
0,0,40,343,1,0,0,0,42,347,1,0,0,0,44,351,1,0,0,0,46,355,1,0,0,0,48,361,1,
0,0,0,50,365,1,0,0,0,52,369,1,0,0,0,54,373,1,0,0,0,56,377,1,0,0,0,58,380,
1,0,0,0,60,398,1,0,0,0,62,405,1,0,0,0,64,410,1,0,0,0,66,415,1,0,0,0,68,429,
1,0,0,0,70,434,1,0,0,0,72,436,1,0,0,0,74,450,1,0,0,0,76,452,1,0,0,0,78,458,
1,0,0,0,80,469,1,0,0,0,82,471,1,0,0,0,84,473,1,0,0,0,86,475,1,0,0,0,88,477,
1,0,0,0,90,479,1,0,0,0,92,481,1,0,0,0,94,96,3,2,1,0,95,94,1,0,0,0,96,97,
1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,1,1,0,0,0,99,104,3,4,2,0,100,104,
3,62,31,0,101,104,3,64,32,0,102,104,3,66,33,0,103,99,1,0,0,0,103,100,1,0,
0,0,103,101,1,0,0,0,103,102,1,0,0,0,104,3,1,0,0,0,105,109,5,1,0,0,106,110,
3,6,3,0,107,110,3,8,4,0,108,110,3,10,5,0,109,106,1,0,0,0,109,107,1,0,0,0,
109,108,1,0,0,0,110,5,1,0,0,0,111,112,5,2,0,0,112,113,3,84,42,0,113,114,
5,4,0,0,114,115,3,82,41,0,115,116,5,58,0,0,116,7,1,0,0,0,117,118,5,3,0,0,
118,119,3,84,42,0,119,120,5,55,0,0,120,125,3,70,35,0,121,122,5,57,0,0,122,
124,3,70,35,0,123,121,1,0,0,0,124,127,1,0,0,0,125,123,1,0,0,0,125,126,1,
0,0,0,126,128,1,0,0,0,127,125,1,0,0,0,128,129,5,56,0,0,129,130,5,58,0,0,
130,9,1,0,0,0,131,139,3,12,6,0,132,139,3,16,8,0,133,139,3,20,10,0,134,139,
3,22,11,0,135,139,3,24,12,0,136,139,3,58,29,0,137,139,3,56,28,0,138,131,
1,0,0,0,138,132,1,0,0,0,138,133,1,0,0,0,138,134,1,0,0,0,138,135,1,0,0,0,
138,136,1,0,0,0,138,137,1,0,0,0,139,11,1,0,0,0,140,141,5,15,0,0,141,142,
5,14,0,0,142,145,3,84,42,0,143,144,5,18,0,0,144,146,3,86,43,0,145,143,1,
0,0,0,145,146,1,0,0,0,146,147,1,0,0,0,147,148,5,55,0,0,148,149,5,19,0,0,
149,154,3,86,43,0,150,151,5,57,0,0,151,153,3,14,7,0,152,150,1,0,0,0,153,
156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,157,1,0,0,0,156,154,1,0,
0,0,157,158,5,56,0,0,158,159,5,58,0,0,159,13,1,0,0,0,160,161,3,86,43,0,161,
162,3,86,43,0,162,15,1,0,0,0,163,164,5,16,0,0,164,165,5,14,0,0,165,168,3,
84,42,0,166,167,5,18,0,0,167,169,3,86,43,0,168,166,1,0,0,0,168,169,1,0,0,
0,169,170,1,0,0,0,170,171,5,55,0,0,171,173,3,84,42,0,172,174,5,21,0,0,173,
172,1,0,0,0,173,174,1,0,0,0,174,175,1,0,0,0,175,176,5,57,0,0,176,177,5,22,
0,0,177,178,3,88,44,0,178,179,5,57,0,0,179,180,5,23,0,0,180,181,3,88,44,
0,181,182,5,57,0,0,182,183,5,24,0,0,183,184,3,90,45,0,184,185,5,57,0,0,185,
186,5,25,0,0,186,187,3,90,45,0,187,188,5,56,0,0,188,189,5,58,0,0,189,17,
1,0,0,0,190,191,5,17,0,0,191,192,5,52,0,0,192,194,5,57,0,0,193,195,5,22,
0,0,194,193,1,0,0,0,194,195,1,0,0,0,195,197,1,0,0,0,196,198,3,88,44,0,197,
196,1,0,0,0,197,198,1,0,0,0,198,200,1,0,0,0,199,201,5,57,0,0,200,199,1,0,
0,0,200,201,1,0,0,0,201,203,1,0,0,0,202,204,5,23,0,0,203,202,1,0,0,0,203,
204,1,0,0,0,204,206,1,0,0,0,205,207,3,88,44,0,206,205,1,0,0,0,206,207,1,
0,0,0,207,209,1,0,0,0,208,210,5,57,0,0,209,208,1,0,0,0,209,210,1,0,0,0,210,
212,1,0,0,0,211,213,5,24,0,0,212,211,1,0,0,0,212,213,1,0,0,0,213,216,1,0,
0,0,214,217,3,90,45,0,215,217,3,92,46,0,216,214,1,0,0,0,216,215,1,0,0,0,
216,217,1,0,0,0,217,219,1,0,0,0,218,220,5,57,0,0,219,218,1,0,0,0,219,220,
1,0,0,0,220,222,1,0,0,0,221,223,5,25,0,0,222,221,1,0,0,0,222,223,1,0,0,0,
223,226,1,0,0,0,224,227,3,90,45,0,225,227,3,92,46,0,226,224,1,0,0,0,226,
225,1,0,0,0,226,227,1,0,0,0,227,229,1,0,0,0,228,230,5,57,0,0,229,228,1,0,
0,0,229,230,1,0,0,0,230,232,1,0,0,0,231,233,5,26,0,0,232,231,1,0,0,0,232,
233,1,0,0,0,233,236,1,0,0,0,234,237,3,90,45,0,235,237,3,92,46,0,236,234,
1,0,0,0,236,235,1,0,0,0,236,237,1,0,0,0,237,19,1,0,0,0,238,239,5,27,0,0,
239,240,5,29,0,0,240,241,3,84,42,0,241,244,5,55,0,0,242,243,5,20,0,0,243,
245,3,86,43,0,244,242,1,0,0,0,244,245,1,0,0,0,245,247,1,0,0,0,246,248,5,
57,0,0,247,246,1,0,0,0,247,248,1,0,0,0,248,250,1,0,0,0,249,251,3,18,9,0,
250,249,1,0,0,0,250,251,1,0,0,0,251,252,1,0,0,0,252,253,5,56,0,0,253,254,
5,58,0,0,254,21,1,0,0,0,255,256,5,27,0,0,256,257,5,14,0,0,257,260,3,84,42,
0,258,259,5,18,0,0,259,261,3,86,43,0,260,258,1,0,0,0,260,261,1,0,0,0,261,
262,1,0,0,0,262,263,5,55,0,0,263,268,3,26,13,0,264,265,5,57,0,0,265,267,
3,26,13,0,266,264,1,0,0,0,267,270,1,0,0,0,268,266,1,0,0,0,268,269,1,0,0,
0,269,271,1,0,0,0,270,268,1,0,0,0,271,272,5,56,0,0,272,273,5,58,0,0,273,
23,1,0,0,0,274,275,5,28,0,0,275,276,5,14,0,0,276,279,3,84,42,0,277,278,5,
18,0,0,278,280,3,86,43,0,279,277,1,0,0,0,279,280,1,0,0,0,280,281,1,0,0,0,
281,282,5,55,0,0,282,283,5,37,0,0,283,287,3,86,43,0,284,285,5,57,0,0,285,
286,5,29,0,0,286,288,3,84,42,0,287,284,1,0,0,0,287,288,1,0,0,0,288,289,1,
0,0,0,289,290,5,56,0,0,290,291,5,58,0,0,291,25,1,0,0,0,292,293,3,84,42,0,
293,294,3,84,42,0,294,319,1,0,0,0,295,296,3,28,14,0,296,298,3,30,15,0,297,
299,3,32,16,0,298,297,1,0,0,0,298,299,1,0,0,0,299,301,1,0,0,0,300,302,3,
34,17,0,301,300,1,0,0,0,301,302,1,0,0,0,302,304,1,0,0,0,303,305,3,48,24,
0,304,303,1,0,0,0,304,305,1,0,0,0,305,307,1,0,0,0,306,308,3,50,25,0,307,
306,1,0,0,0,307,308,1,0,0,0,308,310,1,0,0,0,309,311,3,52,26,0,310,309,1,
0,0,0,310,311,1,0,0,0,311,313,1,0,0,0,312,314,3,46,23,0,313,312,1,0,0,0,
313,314,1,0,0,0,314,316,1,0,0,0,315,317,3,54,27,0,316,315,1,0,0,0,316,317,
1,0,0,0,317,319,1,0,0,0,318,292,1,0,0,0,318,295,1,0,0,0,319,27,1,0,0,0,320,
321,5,36,0,0,321,322,3,86,43,0,322,29,1,0,0,0,323,324,5,57,0,0,324,325,5,
37,0,0,325,326,3,86,43,0,326,31,1,0,0,0,327,328,5,57,0,0,328,329,5,38,0,
0,329,330,3,86,43,0,330,33,1,0,0,0,331,332,5,57,0,0,332,333,5,39,0,0,333,
334,3,86,43,0,334,35,1,0,0,0,335,336,5,57,0,0,336,337,5,40,0,0,337,338,3,
86,43,0,338,37,1,0,0,0,339,340,5,57,0,0,340,341,5,41,0,0,341,342,3,90,45,
0,342,39,1,0,0,0,343,344,5,57,0,0,344,345,5,42,0,0,345,346,3,90,45,0,346,
41,1,0,0,0,347,348,5,57,0,0,348,349,5,43,0,0,349,350,3,90,45,0,350,43,1,
0,0,0,351,352,5,57,0,0,352,353,5,44,0,0,353,354,3,90,45,0,354,45,1,0,0,0,
355,356,3,36,18,0,356,357,3,38,19,0,357,358,3,40,20,0,358,359,3,42,21,0,
359,360,3,44,22,0,360,47,1,0,0,0,361,362,5,57,0,0,362,363,5,29,0,0,363,364,
3,86,43,0,364,49,1,0,0,0,365,366,5,57,0,0,366,367,5,45,0,0,367,368,3,86,
43,0,368,51,1,0,0,0,369,370,5,57,0,0,370,371,5,46,0,0,371,372,3,86,43,0,
372,53,1,0,0,0,373,374,5,57,0,0,374,375,5,47,0,0,375,376,3,86,43,0,376,55,
1,0,0,0,377,378,5,32,0,0,378,379,3,58,29,0,379,57,1,0,0,0,380,381,5,33,0,
0,381,384,3,84,42,0,382,383,5,18,0,0,383,385,3,86,43,0,384,382,1,0,0,0,384,
385,1,0,0,0,385,386,1,0,0,0,386,387,5,55,0,0,387,392,3,60,30,0,388,389,5,
57,0,0,389,391,3,60,30,0,390,388,1,0,0,0,391,394,1,0,0,0,392,390,1,0,0,0,
392,393,1,0,0,0,393,395,1,0,0,0,394,392,1,0,0,0,395,396,5,56,0,0,396,397,
5,58,0,0,397,59,1,0,0,0,398,400,3,84,42,0,399,401,5,30,0,0,400,399,1,0,0,
0,400,401,1,0,0,0,401,403,1,0,0,0,402,404,5,31,0,0,403,402,1,0,0,0,403,404,
1,0,0,0,404,61,1,0,0,0,405,406,5,5,0,0,406,407,5,2,0,0,407,408,3,84,42,0,
408,409,5,58,0,0,409,63,1,0,0,0,410,411,5,6,0,0,411,412,5,2,0,0,412,413,
3,84,42,0,413,414,5,58,0,0,414,65,1,0,0,0,415,416,5,34,0,0,416,417,5,35,
0,0,417,418,5,55,0,0,418,423,3,68,34,0,419,420,5,57,0,0,420,422,3,68,34,
0,421,419,1,0,0,0,422,425,1,0,0,0,423,421,1,0,0,0,423,424,1,0,0,0,424,426,
1,0,0,0,425,423,1,0,0,0,426,427,5,56,0,0,427,428,5,58,0,0,428,67,1,0,0,0,
429,430,3,86,43,0,430,431,3,86,43,0,431,69,1,0,0,0,432,435,3,72,36,0,433,
435,3,74,37,0,434,432,1,0,0,0,434,433,1,0,0,0,435,71,1,0,0,0,436,437,3,84,
42,0,437,441,5,52,0,0,438,440,7,0,0,0,439,438,1,0,0,0,440,443,1,0,0,0,441,
439,1,0,0,0,441,442,1,0,0,0,442,446,1,0,0,0,443,441,1,0,0,0,444,445,5,18,
0,0,445,447,3,86,43,0,446,444,1,0,0,0,446,447,1,0,0,0,447,73,1,0,0,0,448,
451,3,78,39,0,449,451,3,76,38,0,450,448,1,0,0,0,450,449,1,0,0,0,451,75,1,
0,0,0,452,453,3,84,42,0,453,454,3,84,42,0,454,455,5,8,0,0,455,456,5,13,0,
0,456,457,3,84,42,0,457,77,1,0,0,0,458,459,3,84,42,0,459,460,3,84,42,0,460,
461,5,8,0,0,461,462,5,55,0,0,462,463,3,80,40,0,463,464,5,57,0,0,464,465,
3,80,40,0,465,467,5,56,0,0,466,468,5,12,0,0,467,466,1,0,0,0,467,468,1,0,
0,0,468,79,1,0,0,0,469,470,7,1,0,0,470,81,1,0,0,0,471,472,5,60,0,0,472,83,
1,0,0,0,473,474,5,64,0,0,474,85,1,0,0,0,475,476,5,65,0,0,476,87,1,0,0,0,
477,478,5,59,0,0,478,89,1,0,0,0,479,480,5,61,0,0,480,91,1,0,0,0,481,482,
5,60,0,0,482,93,1,0,0,0,48,97,103,109,125,138,145,154,168,173,194,197,200,
203,206,209,212,216,219,222,226,229,232,236,244,247,250,260,268,279,287,
298,301,304,307,310,313,316,318,384,392,400,403,423,434,441,446,450,467];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GISGrammarParser extends antlr4.Parser {

    static grammarFileName = "GISGrammar.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            "'0..1'", "'1..1'", "'0..*'", "'1..*'", null, 
                            "'#'", "'.'", "'('", "')'", "','", "';'" ];
    static symbolicNames = [ null, "CREATE_SYMBOL", "GIS_SYMBOL", "ENTITY_SYMBOL", 
                             "USING_SYMBOL", "USE_SYMBOL", "GENERATE_SYMBOL", 
                             "IDENTIFIER_SYMBOL", "RELATIONSHIP_SYMBOL", 
                             "DISPLAYSTRING_SYMBOL", "REQUIRED_SYMBOL", 
                             "UNIQUE_SYMBOL", "BIDIRECTIONAL_SYMBOL", "MAPPEDBY_SYMBOL", 
                             "LAYER_SYMBOL", "TILE_SYMBOL", "GEOJSON_SYMBOL", 
                             "GEOMETRY_TYPE_SYMBOL", "AS_SYMBOL", "URL_SYMBOL", 
                             "SLD_SYMBOL", "EDITABLE_SYMBOL", "FILL_COLOR_SYMBOL", 
                             "STROKE_COLOR_SYMBOL", "FILL_OPACITY_SYMBOL", 
                             "STROKE_OPACITY_SYMBOL", "STROKE_WIDTH_SYMBOL", 
                             "WMS_SYMBOL", "RASTER_SYMBOL", "STYLE_SYMBOL", 
                             "IS_BASE_LAYER_SYMBOL", "HIDDEN_SYMBOL", "SORTABLE_SYMBOL", 
                             "MAP_SYMBOL", "SET_SYMBOL", "DEPLOYMENT_SYMBOL", 
                             "URL_WMS_SYMBOL", "LAYERNAME_SYMBOL", "FORMAT_SYMBOL", 
                             "CRS_SYMBOL", "BBOX_CRS_SYMBOL", "MINX_SYMBOL", 
                             "MINY_SYMBOL", "MAXX_SYMBOL", "MAXY_SYMBOL", 
                             "QUERYABLE_SYMBOL", "ATTRIBUTION_SYMBOL", "VERSION_SYMBOL", 
                             "ZERO_ONE_SYMBOL", "ONE_ONE_SYMBOL", "ZERO_MANY_SYMBOL", 
                             "ONE_MANY_SYMBOL", "TYPE", "POUND_SYMBOL", 
                             "DOT_SYMBOL", "OPAR_SYMBOL", "CPAR_SYMBOL", 
                             "COMMA_SYMBOL", "SCOL_SYMBOL", "HEX_COLOR", 
                             "INT_NUMBER", "FLOAT_NUMBER", "COMMENT", "WHITESPACE", 
                             "IDENTIFIER", "QUOTED_TEXT" ];
    static ruleNames = [ "parse", "sentence", "createStatement", "createGIS", 
                         "createEntity", "createLayer", "createTileLayer", 
                         "tileOption", "createGeoJSONLayer", "sldCustomBody", 
                         "createWmsStyle", "createWmsLayer", "createRasterLayer", 
                         "wmsSubLayer", "wmsUrl", "wmsLayerName", "wmsFormatName", 
                         "wmsCrs", "wmsBboxCrs", "wmsMinX", "wmsMinY", "wmsMaxX", 
                         "wmsMaxY", "wmsBboxGroup", "wmsStyles", "wmsQueryable", 
                         "wmsAttribution", "wmsVersion", "createSortableMap", 
                         "createMap", "mapLayer", "useGIS", "generateGIS", 
                         "setDeployment", "deploymentProperty", "property", 
                         "propertyDefinition", "relationshipDefinition", 
                         "mappedRelationshipDefinition", "ownedRelationshipDefinition", 
                         "cardinality", "srid", "identifier", "text", "hexColor", 
                         "floatNumber", "intNumber" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GISGrammarParser.ruleNames;
        this.literalNames = GISGrammarParser.literalNames;
        this.symbolicNames = GISGrammarParser.symbolicNames;
    }



	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GISGrammarParser.RULE_parse);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 94;
	            this.sentence();
	            this.state = 97; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 98) !== 0) || _la===34);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentence() {
	    let localctx = new SentenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GISGrammarParser.RULE_sentence);
	    try {
	        this.state = 103;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 99;
	            this.createStatement();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 100;
	            this.useGIS();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 101;
	            this.generateGIS();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 102;
	            this.setDeployment();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createStatement() {
	    let localctx = new CreateStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GISGrammarParser.RULE_createStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(GISGrammarParser.CREATE_SYMBOL);
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 106;
	            this.createGIS();
	            break;
	        case 3:
	            this.state = 107;
	            this.createEntity();
	            break;
	        case 15:
	        case 16:
	        case 27:
	        case 28:
	        case 32:
	        case 33:
	            this.state = 108;
	            this.createLayer();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createGIS() {
	    let localctx = new CreateGISContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GISGrammarParser.RULE_createGIS);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(GISGrammarParser.GIS_SYMBOL);
	        this.state = 112;
	        this.identifier();
	        this.state = 113;
	        this.match(GISGrammarParser.USING_SYMBOL);
	        this.state = 114;
	        this.srid();
	        this.state = 115;
	        this.match(GISGrammarParser.SCOL_SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createEntity() {
	    let localctx = new CreateEntityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GISGrammarParser.RULE_createEntity);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(GISGrammarParser.ENTITY_SYMBOL);
	        this.state = 118;
	        this.identifier();
	        this.state = 119;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 120;
	        this.property();
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===57) {
	            this.state = 121;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 122;
	            this.property();
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 128;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 129;
	        this.match(GISGrammarParser.SCOL_SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createLayer() {
	    let localctx = new CreateLayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GISGrammarParser.RULE_createLayer);
	    try {
	        this.state = 138;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 131;
	            this.createTileLayer();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 132;
	            this.createGeoJSONLayer();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 133;
	            this.createWmsStyle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 134;
	            this.createWmsLayer();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 135;
	            this.createRasterLayer();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 136;
	            this.createMap();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 137;
	            this.createSortableMap();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createTileLayer() {
	    let localctx = new CreateTileLayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GISGrammarParser.RULE_createTileLayer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(GISGrammarParser.TILE_SYMBOL);
	        this.state = 141;
	        this.match(GISGrammarParser.LAYER_SYMBOL);
	        this.state = 142;
	        this.identifier();
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 143;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 144;
	            this.text();
	        }

	        this.state = 147;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 148;
	        this.match(GISGrammarParser.URL_SYMBOL);
	        this.state = 149;
	        this.text();
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===57) {
	            this.state = 150;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 151;
	            this.tileOption();
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 157;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 158;
	        this.match(GISGrammarParser.SCOL_SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tileOption() {
	    let localctx = new TileOptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GISGrammarParser.RULE_tileOption);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.text();
	        this.state = 161;
	        this.text();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createGeoJSONLayer() {
	    let localctx = new CreateGeoJSONLayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, GISGrammarParser.RULE_createGeoJSONLayer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(GISGrammarParser.GEOJSON_SYMBOL);
	        this.state = 164;
	        this.match(GISGrammarParser.LAYER_SYMBOL);
	        this.state = 165;
	        this.identifier();
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 166;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 167;
	            this.text();
	        }

	        this.state = 170;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 171;
	        this.identifier();
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 172;
	            this.match(GISGrammarParser.EDITABLE_SYMBOL);
	        }

	        this.state = 175;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 176;
	        this.match(GISGrammarParser.FILL_COLOR_SYMBOL);
	        this.state = 177;
	        this.hexColor();
	        this.state = 178;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 179;
	        this.match(GISGrammarParser.STROKE_COLOR_SYMBOL);
	        this.state = 180;
	        this.hexColor();
	        this.state = 181;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 182;
	        this.match(GISGrammarParser.FILL_OPACITY_SYMBOL);
	        this.state = 183;
	        this.floatNumber();
	        this.state = 184;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 185;
	        this.match(GISGrammarParser.STROKE_OPACITY_SYMBOL);
	        this.state = 186;
	        this.floatNumber();
	        this.state = 187;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 188;
	        this.match(GISGrammarParser.SCOL_SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sldCustomBody() {
	    let localctx = new SldCustomBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, GISGrammarParser.RULE_sldCustomBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(GISGrammarParser.GEOMETRY_TYPE_SYMBOL);
	        this.state = 191;
	        this.match(GISGrammarParser.TYPE);
	        this.state = 192;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 193;
	            this.match(GISGrammarParser.FILL_COLOR_SYMBOL);
	        }

	        this.state = 197;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 196;
	            this.hexColor();

	        }
	        this.state = 200;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 199;
	            this.match(GISGrammarParser.COMMA_SYMBOL);

	        }
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 202;
	            this.match(GISGrammarParser.STROKE_COLOR_SYMBOL);
	        }

	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===59) {
	            this.state = 205;
	            this.hexColor();
	        }

	        this.state = 209;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 208;
	            this.match(GISGrammarParser.COMMA_SYMBOL);

	        }
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 211;
	            this.match(GISGrammarParser.FILL_OPACITY_SYMBOL);
	        }

	        this.state = 216;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 214;
	            this.floatNumber();

	        } else if(la_===2) {
	            this.state = 215;
	            this.intNumber();

	        }
	        this.state = 219;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 218;
	            this.match(GISGrammarParser.COMMA_SYMBOL);

	        }
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 221;
	            this.match(GISGrammarParser.STROKE_OPACITY_SYMBOL);
	        }

	        this.state = 226;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        if(la_===1) {
	            this.state = 224;
	            this.floatNumber();

	        } else if(la_===2) {
	            this.state = 225;
	            this.intNumber();

	        }
	        this.state = 229;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===57) {
	            this.state = 228;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	        }

	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 231;
	            this.match(GISGrammarParser.STROKE_WIDTH_SYMBOL);
	        }

	        this.state = 236;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 61:
	        	this.state = 234;
	        	this.floatNumber();
	        	break;
	        case 60:
	        	this.state = 235;
	        	this.intNumber();
	        	break;
	        case 56:
	        	break;
	        default:
	        	break;
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createWmsStyle() {
	    let localctx = new CreateWmsStyleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, GISGrammarParser.RULE_createWmsStyle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(GISGrammarParser.WMS_SYMBOL);
	        this.state = 239;
	        this.match(GISGrammarParser.STYLE_SYMBOL);
	        this.state = 240;
	        this.identifier();
	        this.state = 241;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 244;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 242;
	            this.match(GISGrammarParser.SLD_SYMBOL);
	            this.state = 243;
	            this.text();
	        }

	        this.state = 247;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===57) {
	            this.state = 246;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	        }

	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 249;
	            this.sldCustomBody();
	        }

	        this.state = 252;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 253;
	        this.match(GISGrammarParser.SCOL_SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createWmsLayer() {
	    let localctx = new CreateWmsLayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, GISGrammarParser.RULE_createWmsLayer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
	        this.match(GISGrammarParser.WMS_SYMBOL);
	        this.state = 256;
	        this.match(GISGrammarParser.LAYER_SYMBOL);
	        this.state = 257;
	        this.identifier();
	        this.state = 260;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 258;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 259;
	            this.text();
	        }

	        this.state = 262;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 263;
	        this.wmsSubLayer();
	        this.state = 268;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===57) {
	            this.state = 264;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 265;
	            this.wmsSubLayer();
	            this.state = 270;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 271;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 272;
	        this.match(GISGrammarParser.SCOL_SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createRasterLayer() {
	    let localctx = new CreateRasterLayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, GISGrammarParser.RULE_createRasterLayer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this.match(GISGrammarParser.RASTER_SYMBOL);
	        this.state = 275;
	        this.match(GISGrammarParser.LAYER_SYMBOL);
	        this.state = 276;
	        this.identifier();
	        this.state = 279;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 277;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 278;
	            this.text();
	        }

	        this.state = 281;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 282;
	        this.match(GISGrammarParser.LAYERNAME_SYMBOL);
	        this.state = 283;
	        this.text();
	        this.state = 287;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===57) {
	            this.state = 284;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 285;
	            this.match(GISGrammarParser.STYLE_SYMBOL);
	            this.state = 286;
	            this.identifier();
	        }

	        this.state = 289;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 290;
	        this.match(GISGrammarParser.SCOL_SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsSubLayer() {
	    let localctx = new WmsSubLayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, GISGrammarParser.RULE_wmsSubLayer);
	    try {
	        this.state = 318;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 64:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 292;
	            this.identifier();
	            this.state = 293;
	            this.identifier();
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 295;
	            this.wmsUrl();
	            this.state = 296;
	            this.wmsLayerName();
	            this.state = 298;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	            if(la_===1) {
	                this.state = 297;
	                this.wmsFormatName();

	            }
	            this.state = 301;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	            if(la_===1) {
	                this.state = 300;
	                this.wmsCrs();

	            }
	            this.state = 304;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	            if(la_===1) {
	                this.state = 303;
	                this.wmsStyles();

	            }
	            this.state = 307;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	            if(la_===1) {
	                this.state = 306;
	                this.wmsQueryable();

	            }
	            this.state = 310;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	            if(la_===1) {
	                this.state = 309;
	                this.wmsAttribution();

	            }
	            this.state = 313;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	            if(la_===1) {
	                this.state = 312;
	                this.wmsBboxGroup();

	            }
	            this.state = 316;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	            if(la_===1) {
	                this.state = 315;
	                this.wmsVersion();

	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsUrl() {
	    let localctx = new WmsUrlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, GISGrammarParser.RULE_wmsUrl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this.match(GISGrammarParser.URL_WMS_SYMBOL);
	        this.state = 321;
	        this.text();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsLayerName() {
	    let localctx = new WmsLayerNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, GISGrammarParser.RULE_wmsLayerName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 323;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 324;
	        this.match(GISGrammarParser.LAYERNAME_SYMBOL);
	        this.state = 325;
	        this.text();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsFormatName() {
	    let localctx = new WmsFormatNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, GISGrammarParser.RULE_wmsFormatName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 328;
	        this.match(GISGrammarParser.FORMAT_SYMBOL);
	        this.state = 329;
	        this.text();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsCrs() {
	    let localctx = new WmsCrsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, GISGrammarParser.RULE_wmsCrs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 332;
	        this.match(GISGrammarParser.CRS_SYMBOL);
	        this.state = 333;
	        this.text();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsBboxCrs() {
	    let localctx = new WmsBboxCrsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, GISGrammarParser.RULE_wmsBboxCrs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 336;
	        this.match(GISGrammarParser.BBOX_CRS_SYMBOL);
	        this.state = 337;
	        this.text();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsMinX() {
	    let localctx = new WmsMinXContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, GISGrammarParser.RULE_wmsMinX);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 339;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 340;
	        this.match(GISGrammarParser.MINX_SYMBOL);
	        this.state = 341;
	        this.floatNumber();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsMinY() {
	    let localctx = new WmsMinYContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, GISGrammarParser.RULE_wmsMinY);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 344;
	        this.match(GISGrammarParser.MINY_SYMBOL);
	        this.state = 345;
	        this.floatNumber();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsMaxX() {
	    let localctx = new WmsMaxXContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, GISGrammarParser.RULE_wmsMaxX);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 348;
	        this.match(GISGrammarParser.MAXX_SYMBOL);
	        this.state = 349;
	        this.floatNumber();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsMaxY() {
	    let localctx = new WmsMaxYContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, GISGrammarParser.RULE_wmsMaxY);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 351;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 352;
	        this.match(GISGrammarParser.MAXY_SYMBOL);
	        this.state = 353;
	        this.floatNumber();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsBboxGroup() {
	    let localctx = new WmsBboxGroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, GISGrammarParser.RULE_wmsBboxGroup);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.wmsBboxCrs();
	        this.state = 356;
	        this.wmsMinX();
	        this.state = 357;
	        this.wmsMinY();
	        this.state = 358;
	        this.wmsMaxX();
	        this.state = 359;
	        this.wmsMaxY();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsStyles() {
	    let localctx = new WmsStylesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, GISGrammarParser.RULE_wmsStyles);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 362;
	        this.match(GISGrammarParser.STYLE_SYMBOL);
	        this.state = 363;
	        this.text();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsQueryable() {
	    let localctx = new WmsQueryableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, GISGrammarParser.RULE_wmsQueryable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 366;
	        this.match(GISGrammarParser.QUERYABLE_SYMBOL);
	        this.state = 367;
	        this.text();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsAttribution() {
	    let localctx = new WmsAttributionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, GISGrammarParser.RULE_wmsAttribution);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 370;
	        this.match(GISGrammarParser.ATTRIBUTION_SYMBOL);
	        this.state = 371;
	        this.text();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wmsVersion() {
	    let localctx = new WmsVersionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, GISGrammarParser.RULE_wmsVersion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 374;
	        this.match(GISGrammarParser.VERSION_SYMBOL);
	        this.state = 375;
	        this.text();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createSortableMap() {
	    let localctx = new CreateSortableMapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, GISGrammarParser.RULE_createSortableMap);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.match(GISGrammarParser.SORTABLE_SYMBOL);
	        this.state = 378;
	        this.createMap();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createMap() {
	    let localctx = new CreateMapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, GISGrammarParser.RULE_createMap);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this.match(GISGrammarParser.MAP_SYMBOL);
	        this.state = 381;
	        this.identifier();
	        this.state = 384;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 382;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 383;
	            this.text();
	        }

	        this.state = 386;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 387;
	        this.mapLayer();
	        this.state = 392;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===57) {
	            this.state = 388;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 389;
	            this.mapLayer();
	            this.state = 394;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 395;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 396;
	        this.match(GISGrammarParser.SCOL_SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mapLayer() {
	    let localctx = new MapLayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, GISGrammarParser.RULE_mapLayer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        this.identifier();
	        this.state = 400;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 399;
	            this.match(GISGrammarParser.IS_BASE_LAYER_SYMBOL);
	        }

	        this.state = 403;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 402;
	            this.match(GISGrammarParser.HIDDEN_SYMBOL);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	useGIS() {
	    let localctx = new UseGISContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, GISGrammarParser.RULE_useGIS);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
	        this.match(GISGrammarParser.USE_SYMBOL);
	        this.state = 406;
	        this.match(GISGrammarParser.GIS_SYMBOL);
	        this.state = 407;
	        this.identifier();
	        this.state = 408;
	        this.match(GISGrammarParser.SCOL_SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	generateGIS() {
	    let localctx = new GenerateGISContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, GISGrammarParser.RULE_generateGIS);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        this.match(GISGrammarParser.GENERATE_SYMBOL);
	        this.state = 411;
	        this.match(GISGrammarParser.GIS_SYMBOL);
	        this.state = 412;
	        this.identifier();
	        this.state = 413;
	        this.match(GISGrammarParser.SCOL_SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setDeployment() {
	    let localctx = new SetDeploymentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, GISGrammarParser.RULE_setDeployment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
	        this.match(GISGrammarParser.SET_SYMBOL);
	        this.state = 416;
	        this.match(GISGrammarParser.DEPLOYMENT_SYMBOL);
	        this.state = 417;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 418;
	        this.deploymentProperty();
	        this.state = 423;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===57) {
	            this.state = 419;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 420;
	            this.deploymentProperty();
	            this.state = 425;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 426;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 427;
	        this.match(GISGrammarParser.SCOL_SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	deploymentProperty() {
	    let localctx = new DeploymentPropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, GISGrammarParser.RULE_deploymentProperty);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 429;
	        this.text();
	        this.state = 430;
	        this.text();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	property() {
	    let localctx = new PropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, GISGrammarParser.RULE_property);
	    try {
	        this.state = 434;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 432;
	            this.propertyDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 433;
	            this.relationshipDefinition();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	propertyDefinition() {
	    let localctx = new PropertyDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, GISGrammarParser.RULE_propertyDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 436;
	        this.identifier();
	        this.state = 437;
	        this.match(GISGrammarParser.TYPE);
	        this.state = 441;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3712) !== 0)) {
	            this.state = 438;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3712) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 443;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 446;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 444;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 445;
	            this.text();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relationshipDefinition() {
	    let localctx = new RelationshipDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, GISGrammarParser.RULE_relationshipDefinition);
	    try {
	        this.state = 450;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 448;
	            this.ownedRelationshipDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 449;
	            this.mappedRelationshipDefinition();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mappedRelationshipDefinition() {
	    let localctx = new MappedRelationshipDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, GISGrammarParser.RULE_mappedRelationshipDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 452;
	        this.identifier();
	        this.state = 453;
	        this.identifier();
	        this.state = 454;
	        this.match(GISGrammarParser.RELATIONSHIP_SYMBOL);
	        this.state = 455;
	        this.match(GISGrammarParser.MAPPEDBY_SYMBOL);
	        this.state = 456;
	        this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ownedRelationshipDefinition() {
	    let localctx = new OwnedRelationshipDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, GISGrammarParser.RULE_ownedRelationshipDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 458;
	        this.identifier();
	        this.state = 459;
	        this.identifier();
	        this.state = 460;
	        this.match(GISGrammarParser.RELATIONSHIP_SYMBOL);
	        this.state = 461;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 462;
	        this.cardinality();
	        this.state = 463;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 464;
	        this.cardinality();
	        this.state = 465;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 467;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 466;
	            this.match(GISGrammarParser.BIDIRECTIONAL_SYMBOL);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cardinality() {
	    let localctx = new CardinalityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, GISGrammarParser.RULE_cardinality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 469;
	        _la = this._input.LA(1);
	        if(!(((((_la - 48)) & ~0x1f) === 0 && ((1 << (_la - 48)) & 15) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	srid() {
	    let localctx = new SridContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, GISGrammarParser.RULE_srid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 471;
	        this.match(GISGrammarParser.INT_NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, GISGrammarParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 473;
	        this.match(GISGrammarParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, GISGrammarParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 475;
	        this.match(GISGrammarParser.QUOTED_TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hexColor() {
	    let localctx = new HexColorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, GISGrammarParser.RULE_hexColor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 477;
	        this.match(GISGrammarParser.HEX_COLOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	floatNumber() {
	    let localctx = new FloatNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, GISGrammarParser.RULE_floatNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 479;
	        this.match(GISGrammarParser.FLOAT_NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	intNumber() {
	    let localctx = new IntNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, GISGrammarParser.RULE_intNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 481;
	        this.match(GISGrammarParser.INT_NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

GISGrammarParser.EOF = antlr4.Token.EOF;
GISGrammarParser.CREATE_SYMBOL = 1;
GISGrammarParser.GIS_SYMBOL = 2;
GISGrammarParser.ENTITY_SYMBOL = 3;
GISGrammarParser.USING_SYMBOL = 4;
GISGrammarParser.USE_SYMBOL = 5;
GISGrammarParser.GENERATE_SYMBOL = 6;
GISGrammarParser.IDENTIFIER_SYMBOL = 7;
GISGrammarParser.RELATIONSHIP_SYMBOL = 8;
GISGrammarParser.DISPLAYSTRING_SYMBOL = 9;
GISGrammarParser.REQUIRED_SYMBOL = 10;
GISGrammarParser.UNIQUE_SYMBOL = 11;
GISGrammarParser.BIDIRECTIONAL_SYMBOL = 12;
GISGrammarParser.MAPPEDBY_SYMBOL = 13;
GISGrammarParser.LAYER_SYMBOL = 14;
GISGrammarParser.TILE_SYMBOL = 15;
GISGrammarParser.GEOJSON_SYMBOL = 16;
GISGrammarParser.GEOMETRY_TYPE_SYMBOL = 17;
GISGrammarParser.AS_SYMBOL = 18;
GISGrammarParser.URL_SYMBOL = 19;
GISGrammarParser.SLD_SYMBOL = 20;
GISGrammarParser.EDITABLE_SYMBOL = 21;
GISGrammarParser.FILL_COLOR_SYMBOL = 22;
GISGrammarParser.STROKE_COLOR_SYMBOL = 23;
GISGrammarParser.FILL_OPACITY_SYMBOL = 24;
GISGrammarParser.STROKE_OPACITY_SYMBOL = 25;
GISGrammarParser.STROKE_WIDTH_SYMBOL = 26;
GISGrammarParser.WMS_SYMBOL = 27;
GISGrammarParser.RASTER_SYMBOL = 28;
GISGrammarParser.STYLE_SYMBOL = 29;
GISGrammarParser.IS_BASE_LAYER_SYMBOL = 30;
GISGrammarParser.HIDDEN_SYMBOL = 31;
GISGrammarParser.SORTABLE_SYMBOL = 32;
GISGrammarParser.MAP_SYMBOL = 33;
GISGrammarParser.SET_SYMBOL = 34;
GISGrammarParser.DEPLOYMENT_SYMBOL = 35;
GISGrammarParser.URL_WMS_SYMBOL = 36;
GISGrammarParser.LAYERNAME_SYMBOL = 37;
GISGrammarParser.FORMAT_SYMBOL = 38;
GISGrammarParser.CRS_SYMBOL = 39;
GISGrammarParser.BBOX_CRS_SYMBOL = 40;
GISGrammarParser.MINX_SYMBOL = 41;
GISGrammarParser.MINY_SYMBOL = 42;
GISGrammarParser.MAXX_SYMBOL = 43;
GISGrammarParser.MAXY_SYMBOL = 44;
GISGrammarParser.QUERYABLE_SYMBOL = 45;
GISGrammarParser.ATTRIBUTION_SYMBOL = 46;
GISGrammarParser.VERSION_SYMBOL = 47;
GISGrammarParser.ZERO_ONE_SYMBOL = 48;
GISGrammarParser.ONE_ONE_SYMBOL = 49;
GISGrammarParser.ZERO_MANY_SYMBOL = 50;
GISGrammarParser.ONE_MANY_SYMBOL = 51;
GISGrammarParser.TYPE = 52;
GISGrammarParser.POUND_SYMBOL = 53;
GISGrammarParser.DOT_SYMBOL = 54;
GISGrammarParser.OPAR_SYMBOL = 55;
GISGrammarParser.CPAR_SYMBOL = 56;
GISGrammarParser.COMMA_SYMBOL = 57;
GISGrammarParser.SCOL_SYMBOL = 58;
GISGrammarParser.HEX_COLOR = 59;
GISGrammarParser.INT_NUMBER = 60;
GISGrammarParser.FLOAT_NUMBER = 61;
GISGrammarParser.COMMENT = 62;
GISGrammarParser.WHITESPACE = 63;
GISGrammarParser.IDENTIFIER = 64;
GISGrammarParser.QUOTED_TEXT = 65;

GISGrammarParser.RULE_parse = 0;
GISGrammarParser.RULE_sentence = 1;
GISGrammarParser.RULE_createStatement = 2;
GISGrammarParser.RULE_createGIS = 3;
GISGrammarParser.RULE_createEntity = 4;
GISGrammarParser.RULE_createLayer = 5;
GISGrammarParser.RULE_createTileLayer = 6;
GISGrammarParser.RULE_tileOption = 7;
GISGrammarParser.RULE_createGeoJSONLayer = 8;
GISGrammarParser.RULE_sldCustomBody = 9;
GISGrammarParser.RULE_createWmsStyle = 10;
GISGrammarParser.RULE_createWmsLayer = 11;
GISGrammarParser.RULE_createRasterLayer = 12;
GISGrammarParser.RULE_wmsSubLayer = 13;
GISGrammarParser.RULE_wmsUrl = 14;
GISGrammarParser.RULE_wmsLayerName = 15;
GISGrammarParser.RULE_wmsFormatName = 16;
GISGrammarParser.RULE_wmsCrs = 17;
GISGrammarParser.RULE_wmsBboxCrs = 18;
GISGrammarParser.RULE_wmsMinX = 19;
GISGrammarParser.RULE_wmsMinY = 20;
GISGrammarParser.RULE_wmsMaxX = 21;
GISGrammarParser.RULE_wmsMaxY = 22;
GISGrammarParser.RULE_wmsBboxGroup = 23;
GISGrammarParser.RULE_wmsStyles = 24;
GISGrammarParser.RULE_wmsQueryable = 25;
GISGrammarParser.RULE_wmsAttribution = 26;
GISGrammarParser.RULE_wmsVersion = 27;
GISGrammarParser.RULE_createSortableMap = 28;
GISGrammarParser.RULE_createMap = 29;
GISGrammarParser.RULE_mapLayer = 30;
GISGrammarParser.RULE_useGIS = 31;
GISGrammarParser.RULE_generateGIS = 32;
GISGrammarParser.RULE_setDeployment = 33;
GISGrammarParser.RULE_deploymentProperty = 34;
GISGrammarParser.RULE_property = 35;
GISGrammarParser.RULE_propertyDefinition = 36;
GISGrammarParser.RULE_relationshipDefinition = 37;
GISGrammarParser.RULE_mappedRelationshipDefinition = 38;
GISGrammarParser.RULE_ownedRelationshipDefinition = 39;
GISGrammarParser.RULE_cardinality = 40;
GISGrammarParser.RULE_srid = 41;
GISGrammarParser.RULE_identifier = 42;
GISGrammarParser.RULE_text = 43;
GISGrammarParser.RULE_hexColor = 44;
GISGrammarParser.RULE_floatNumber = 45;
GISGrammarParser.RULE_intNumber = 46;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_parse;
    }

	sentence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenceContext);
	    } else {
	        return this.getTypedRuleContext(SentenceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitParse(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitParse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_sentence;
    }

	createStatement() {
	    return this.getTypedRuleContext(CreateStatementContext,0);
	};

	useGIS() {
	    return this.getTypedRuleContext(UseGISContext,0);
	};

	generateGIS() {
	    return this.getTypedRuleContext(GenerateGISContext,0);
	};

	setDeployment() {
	    return this.getTypedRuleContext(SetDeploymentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterSentence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitSentence(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitSentence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_createStatement;
    }

	CREATE_SYMBOL() {
	    return this.getToken(GISGrammarParser.CREATE_SYMBOL, 0);
	};

	createGIS() {
	    return this.getTypedRuleContext(CreateGISContext,0);
	};

	createEntity() {
	    return this.getTypedRuleContext(CreateEntityContext,0);
	};

	createLayer() {
	    return this.getTypedRuleContext(CreateLayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterCreateStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitCreateStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitCreateStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateGISContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_createGIS;
    }

	GIS_SYMBOL() {
	    return this.getToken(GISGrammarParser.GIS_SYMBOL, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	USING_SYMBOL() {
	    return this.getToken(GISGrammarParser.USING_SYMBOL, 0);
	};

	srid() {
	    return this.getTypedRuleContext(SridContext,0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(GISGrammarParser.SCOL_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterCreateGIS(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitCreateGIS(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitCreateGIS(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateEntityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_createEntity;
    }

	ENTITY_SYMBOL() {
	    return this.getToken(GISGrammarParser.ENTITY_SYMBOL, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.OPAR_SYMBOL, 0);
	};

	property = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyContext);
	    } else {
	        return this.getTypedRuleContext(PropertyContext,i);
	    }
	};

	CPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.CPAR_SYMBOL, 0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(GISGrammarParser.SCOL_SYMBOL, 0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GISGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(GISGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterCreateEntity(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitCreateEntity(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitCreateEntity(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateLayerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_createLayer;
    }

	createTileLayer() {
	    return this.getTypedRuleContext(CreateTileLayerContext,0);
	};

	createGeoJSONLayer() {
	    return this.getTypedRuleContext(CreateGeoJSONLayerContext,0);
	};

	createWmsStyle() {
	    return this.getTypedRuleContext(CreateWmsStyleContext,0);
	};

	createWmsLayer() {
	    return this.getTypedRuleContext(CreateWmsLayerContext,0);
	};

	createRasterLayer() {
	    return this.getTypedRuleContext(CreateRasterLayerContext,0);
	};

	createMap() {
	    return this.getTypedRuleContext(CreateMapContext,0);
	};

	createSortableMap() {
	    return this.getTypedRuleContext(CreateSortableMapContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterCreateLayer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitCreateLayer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitCreateLayer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateTileLayerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_createTileLayer;
    }

	TILE_SYMBOL() {
	    return this.getToken(GISGrammarParser.TILE_SYMBOL, 0);
	};

	LAYER_SYMBOL() {
	    return this.getToken(GISGrammarParser.LAYER_SYMBOL, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.OPAR_SYMBOL, 0);
	};

	URL_SYMBOL() {
	    return this.getToken(GISGrammarParser.URL_SYMBOL, 0);
	};

	text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContext);
	    } else {
	        return this.getTypedRuleContext(TextContext,i);
	    }
	};

	CPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.CPAR_SYMBOL, 0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(GISGrammarParser.SCOL_SYMBOL, 0);
	};

	AS_SYMBOL() {
	    return this.getToken(GISGrammarParser.AS_SYMBOL, 0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GISGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(GISGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	tileOption = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TileOptionContext);
	    } else {
	        return this.getTypedRuleContext(TileOptionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterCreateTileLayer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitCreateTileLayer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitCreateTileLayer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TileOptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_tileOption;
    }

	text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContext);
	    } else {
	        return this.getTypedRuleContext(TextContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterTileOption(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitTileOption(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitTileOption(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateGeoJSONLayerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_createGeoJSONLayer;
    }

	GEOJSON_SYMBOL() {
	    return this.getToken(GISGrammarParser.GEOJSON_SYMBOL, 0);
	};

	LAYER_SYMBOL() {
	    return this.getToken(GISGrammarParser.LAYER_SYMBOL, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	OPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.OPAR_SYMBOL, 0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GISGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(GISGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	FILL_COLOR_SYMBOL() {
	    return this.getToken(GISGrammarParser.FILL_COLOR_SYMBOL, 0);
	};

	hexColor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HexColorContext);
	    } else {
	        return this.getTypedRuleContext(HexColorContext,i);
	    }
	};

	STROKE_COLOR_SYMBOL() {
	    return this.getToken(GISGrammarParser.STROKE_COLOR_SYMBOL, 0);
	};

	FILL_OPACITY_SYMBOL() {
	    return this.getToken(GISGrammarParser.FILL_OPACITY_SYMBOL, 0);
	};

	floatNumber = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FloatNumberContext);
	    } else {
	        return this.getTypedRuleContext(FloatNumberContext,i);
	    }
	};

	STROKE_OPACITY_SYMBOL() {
	    return this.getToken(GISGrammarParser.STROKE_OPACITY_SYMBOL, 0);
	};

	CPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.CPAR_SYMBOL, 0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(GISGrammarParser.SCOL_SYMBOL, 0);
	};

	AS_SYMBOL() {
	    return this.getToken(GISGrammarParser.AS_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	EDITABLE_SYMBOL() {
	    return this.getToken(GISGrammarParser.EDITABLE_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterCreateGeoJSONLayer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitCreateGeoJSONLayer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitCreateGeoJSONLayer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SldCustomBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_sldCustomBody;
    }

	GEOMETRY_TYPE_SYMBOL() {
	    return this.getToken(GISGrammarParser.GEOMETRY_TYPE_SYMBOL, 0);
	};

	TYPE() {
	    return this.getToken(GISGrammarParser.TYPE, 0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GISGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(GISGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	FILL_COLOR_SYMBOL() {
	    return this.getToken(GISGrammarParser.FILL_COLOR_SYMBOL, 0);
	};

	hexColor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HexColorContext);
	    } else {
	        return this.getTypedRuleContext(HexColorContext,i);
	    }
	};

	STROKE_COLOR_SYMBOL() {
	    return this.getToken(GISGrammarParser.STROKE_COLOR_SYMBOL, 0);
	};

	FILL_OPACITY_SYMBOL() {
	    return this.getToken(GISGrammarParser.FILL_OPACITY_SYMBOL, 0);
	};

	floatNumber = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FloatNumberContext);
	    } else {
	        return this.getTypedRuleContext(FloatNumberContext,i);
	    }
	};

	intNumber = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IntNumberContext);
	    } else {
	        return this.getTypedRuleContext(IntNumberContext,i);
	    }
	};

	STROKE_OPACITY_SYMBOL() {
	    return this.getToken(GISGrammarParser.STROKE_OPACITY_SYMBOL, 0);
	};

	STROKE_WIDTH_SYMBOL() {
	    return this.getToken(GISGrammarParser.STROKE_WIDTH_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterSldCustomBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitSldCustomBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitSldCustomBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateWmsStyleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_createWmsStyle;
    }

	WMS_SYMBOL() {
	    return this.getToken(GISGrammarParser.WMS_SYMBOL, 0);
	};

	STYLE_SYMBOL() {
	    return this.getToken(GISGrammarParser.STYLE_SYMBOL, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.OPAR_SYMBOL, 0);
	};

	CPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.CPAR_SYMBOL, 0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(GISGrammarParser.SCOL_SYMBOL, 0);
	};

	SLD_SYMBOL() {
	    return this.getToken(GISGrammarParser.SLD_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	sldCustomBody() {
	    return this.getTypedRuleContext(SldCustomBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterCreateWmsStyle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitCreateWmsStyle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitCreateWmsStyle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateWmsLayerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_createWmsLayer;
    }

	WMS_SYMBOL() {
	    return this.getToken(GISGrammarParser.WMS_SYMBOL, 0);
	};

	LAYER_SYMBOL() {
	    return this.getToken(GISGrammarParser.LAYER_SYMBOL, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.OPAR_SYMBOL, 0);
	};

	wmsSubLayer = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WmsSubLayerContext);
	    } else {
	        return this.getTypedRuleContext(WmsSubLayerContext,i);
	    }
	};

	CPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.CPAR_SYMBOL, 0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(GISGrammarParser.SCOL_SYMBOL, 0);
	};

	AS_SYMBOL() {
	    return this.getToken(GISGrammarParser.AS_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GISGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(GISGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterCreateWmsLayer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitCreateWmsLayer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitCreateWmsLayer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateRasterLayerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_createRasterLayer;
    }

	RASTER_SYMBOL() {
	    return this.getToken(GISGrammarParser.RASTER_SYMBOL, 0);
	};

	LAYER_SYMBOL() {
	    return this.getToken(GISGrammarParser.LAYER_SYMBOL, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	OPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.OPAR_SYMBOL, 0);
	};

	LAYERNAME_SYMBOL() {
	    return this.getToken(GISGrammarParser.LAYERNAME_SYMBOL, 0);
	};

	text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContext);
	    } else {
	        return this.getTypedRuleContext(TextContext,i);
	    }
	};

	CPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.CPAR_SYMBOL, 0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(GISGrammarParser.SCOL_SYMBOL, 0);
	};

	AS_SYMBOL() {
	    return this.getToken(GISGrammarParser.AS_SYMBOL, 0);
	};

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	STYLE_SYMBOL() {
	    return this.getToken(GISGrammarParser.STYLE_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterCreateRasterLayer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitCreateRasterLayer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitCreateRasterLayer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsSubLayerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsSubLayer;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	wmsUrl() {
	    return this.getTypedRuleContext(WmsUrlContext,0);
	};

	wmsLayerName() {
	    return this.getTypedRuleContext(WmsLayerNameContext,0);
	};

	wmsFormatName() {
	    return this.getTypedRuleContext(WmsFormatNameContext,0);
	};

	wmsCrs() {
	    return this.getTypedRuleContext(WmsCrsContext,0);
	};

	wmsStyles() {
	    return this.getTypedRuleContext(WmsStylesContext,0);
	};

	wmsQueryable() {
	    return this.getTypedRuleContext(WmsQueryableContext,0);
	};

	wmsAttribution() {
	    return this.getTypedRuleContext(WmsAttributionContext,0);
	};

	wmsBboxGroup() {
	    return this.getTypedRuleContext(WmsBboxGroupContext,0);
	};

	wmsVersion() {
	    return this.getTypedRuleContext(WmsVersionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsSubLayer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsSubLayer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsSubLayer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsUrlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsUrl;
    }

	URL_WMS_SYMBOL() {
	    return this.getToken(GISGrammarParser.URL_WMS_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsUrl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsUrl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsUrl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsLayerNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsLayerName;
    }

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	LAYERNAME_SYMBOL() {
	    return this.getToken(GISGrammarParser.LAYERNAME_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsLayerName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsLayerName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsLayerName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsFormatNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsFormatName;
    }

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	FORMAT_SYMBOL() {
	    return this.getToken(GISGrammarParser.FORMAT_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsFormatName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsFormatName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsFormatName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsCrsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsCrs;
    }

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	CRS_SYMBOL() {
	    return this.getToken(GISGrammarParser.CRS_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsCrs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsCrs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsCrs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsBboxCrsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsBboxCrs;
    }

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	BBOX_CRS_SYMBOL() {
	    return this.getToken(GISGrammarParser.BBOX_CRS_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsBboxCrs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsBboxCrs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsBboxCrs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsMinXContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsMinX;
    }

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	MINX_SYMBOL() {
	    return this.getToken(GISGrammarParser.MINX_SYMBOL, 0);
	};

	floatNumber() {
	    return this.getTypedRuleContext(FloatNumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsMinX(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsMinX(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsMinX(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsMinYContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsMinY;
    }

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	MINY_SYMBOL() {
	    return this.getToken(GISGrammarParser.MINY_SYMBOL, 0);
	};

	floatNumber() {
	    return this.getTypedRuleContext(FloatNumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsMinY(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsMinY(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsMinY(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsMaxXContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsMaxX;
    }

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	MAXX_SYMBOL() {
	    return this.getToken(GISGrammarParser.MAXX_SYMBOL, 0);
	};

	floatNumber() {
	    return this.getTypedRuleContext(FloatNumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsMaxX(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsMaxX(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsMaxX(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsMaxYContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsMaxY;
    }

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	MAXY_SYMBOL() {
	    return this.getToken(GISGrammarParser.MAXY_SYMBOL, 0);
	};

	floatNumber() {
	    return this.getTypedRuleContext(FloatNumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsMaxY(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsMaxY(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsMaxY(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsBboxGroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsBboxGroup;
    }

	wmsBboxCrs() {
	    return this.getTypedRuleContext(WmsBboxCrsContext,0);
	};

	wmsMinX() {
	    return this.getTypedRuleContext(WmsMinXContext,0);
	};

	wmsMinY() {
	    return this.getTypedRuleContext(WmsMinYContext,0);
	};

	wmsMaxX() {
	    return this.getTypedRuleContext(WmsMaxXContext,0);
	};

	wmsMaxY() {
	    return this.getTypedRuleContext(WmsMaxYContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsBboxGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsBboxGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsBboxGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsStylesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsStyles;
    }

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	STYLE_SYMBOL() {
	    return this.getToken(GISGrammarParser.STYLE_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsStyles(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsStyles(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsStyles(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsQueryableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsQueryable;
    }

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	QUERYABLE_SYMBOL() {
	    return this.getToken(GISGrammarParser.QUERYABLE_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsQueryable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsQueryable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsQueryable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsAttributionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsAttribution;
    }

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	ATTRIBUTION_SYMBOL() {
	    return this.getToken(GISGrammarParser.ATTRIBUTION_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsAttribution(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsAttribution(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsAttribution(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WmsVersionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_wmsVersion;
    }

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	VERSION_SYMBOL() {
	    return this.getToken(GISGrammarParser.VERSION_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterWmsVersion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitWmsVersion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitWmsVersion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateSortableMapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_createSortableMap;
    }

	SORTABLE_SYMBOL() {
	    return this.getToken(GISGrammarParser.SORTABLE_SYMBOL, 0);
	};

	createMap() {
	    return this.getTypedRuleContext(CreateMapContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterCreateSortableMap(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitCreateSortableMap(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitCreateSortableMap(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CreateMapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_createMap;
    }

	MAP_SYMBOL() {
	    return this.getToken(GISGrammarParser.MAP_SYMBOL, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.OPAR_SYMBOL, 0);
	};

	mapLayer = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MapLayerContext);
	    } else {
	        return this.getTypedRuleContext(MapLayerContext,i);
	    }
	};

	CPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.CPAR_SYMBOL, 0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(GISGrammarParser.SCOL_SYMBOL, 0);
	};

	AS_SYMBOL() {
	    return this.getToken(GISGrammarParser.AS_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GISGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(GISGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterCreateMap(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitCreateMap(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitCreateMap(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MapLayerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_mapLayer;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IS_BASE_LAYER_SYMBOL() {
	    return this.getToken(GISGrammarParser.IS_BASE_LAYER_SYMBOL, 0);
	};

	HIDDEN_SYMBOL() {
	    return this.getToken(GISGrammarParser.HIDDEN_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterMapLayer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitMapLayer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitMapLayer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UseGISContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_useGIS;
    }

	USE_SYMBOL() {
	    return this.getToken(GISGrammarParser.USE_SYMBOL, 0);
	};

	GIS_SYMBOL() {
	    return this.getToken(GISGrammarParser.GIS_SYMBOL, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(GISGrammarParser.SCOL_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterUseGIS(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitUseGIS(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitUseGIS(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GenerateGISContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_generateGIS;
    }

	GENERATE_SYMBOL() {
	    return this.getToken(GISGrammarParser.GENERATE_SYMBOL, 0);
	};

	GIS_SYMBOL() {
	    return this.getToken(GISGrammarParser.GIS_SYMBOL, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(GISGrammarParser.SCOL_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterGenerateGIS(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitGenerateGIS(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitGenerateGIS(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetDeploymentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_setDeployment;
    }

	SET_SYMBOL() {
	    return this.getToken(GISGrammarParser.SET_SYMBOL, 0);
	};

	DEPLOYMENT_SYMBOL() {
	    return this.getToken(GISGrammarParser.DEPLOYMENT_SYMBOL, 0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.OPAR_SYMBOL, 0);
	};

	deploymentProperty = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeploymentPropertyContext);
	    } else {
	        return this.getTypedRuleContext(DeploymentPropertyContext,i);
	    }
	};

	CPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.CPAR_SYMBOL, 0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(GISGrammarParser.SCOL_SYMBOL, 0);
	};

	COMMA_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GISGrammarParser.COMMA_SYMBOL);
	    } else {
	        return this.getToken(GISGrammarParser.COMMA_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterSetDeployment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitSetDeployment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitSetDeployment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeploymentPropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_deploymentProperty;
    }

	text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContext);
	    } else {
	        return this.getTypedRuleContext(TextContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterDeploymentProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitDeploymentProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitDeploymentProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_property;
    }

	propertyDefinition() {
	    return this.getTypedRuleContext(PropertyDefinitionContext,0);
	};

	relationshipDefinition() {
	    return this.getTypedRuleContext(RelationshipDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitProperty(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitProperty(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PropertyDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_propertyDefinition;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	TYPE() {
	    return this.getToken(GISGrammarParser.TYPE, 0);
	};

	AS_SYMBOL() {
	    return this.getToken(GISGrammarParser.AS_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	IDENTIFIER_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GISGrammarParser.IDENTIFIER_SYMBOL);
	    } else {
	        return this.getToken(GISGrammarParser.IDENTIFIER_SYMBOL, i);
	    }
	};


	DISPLAYSTRING_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GISGrammarParser.DISPLAYSTRING_SYMBOL);
	    } else {
	        return this.getToken(GISGrammarParser.DISPLAYSTRING_SYMBOL, i);
	    }
	};


	REQUIRED_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GISGrammarParser.REQUIRED_SYMBOL);
	    } else {
	        return this.getToken(GISGrammarParser.REQUIRED_SYMBOL, i);
	    }
	};


	UNIQUE_SYMBOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GISGrammarParser.UNIQUE_SYMBOL);
	    } else {
	        return this.getToken(GISGrammarParser.UNIQUE_SYMBOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterPropertyDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitPropertyDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitPropertyDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RelationshipDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_relationshipDefinition;
    }

	ownedRelationshipDefinition() {
	    return this.getTypedRuleContext(OwnedRelationshipDefinitionContext,0);
	};

	mappedRelationshipDefinition() {
	    return this.getTypedRuleContext(MappedRelationshipDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterRelationshipDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitRelationshipDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitRelationshipDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MappedRelationshipDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_mappedRelationshipDefinition;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	RELATIONSHIP_SYMBOL() {
	    return this.getToken(GISGrammarParser.RELATIONSHIP_SYMBOL, 0);
	};

	MAPPEDBY_SYMBOL() {
	    return this.getToken(GISGrammarParser.MAPPEDBY_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterMappedRelationshipDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitMappedRelationshipDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitMappedRelationshipDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OwnedRelationshipDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_ownedRelationshipDefinition;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	RELATIONSHIP_SYMBOL() {
	    return this.getToken(GISGrammarParser.RELATIONSHIP_SYMBOL, 0);
	};

	OPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.OPAR_SYMBOL, 0);
	};

	cardinality = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CardinalityContext);
	    } else {
	        return this.getTypedRuleContext(CardinalityContext,i);
	    }
	};

	COMMA_SYMBOL() {
	    return this.getToken(GISGrammarParser.COMMA_SYMBOL, 0);
	};

	CPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.CPAR_SYMBOL, 0);
	};

	BIDIRECTIONAL_SYMBOL() {
	    return this.getToken(GISGrammarParser.BIDIRECTIONAL_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterOwnedRelationshipDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitOwnedRelationshipDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitOwnedRelationshipDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CardinalityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_cardinality;
    }

	ZERO_ONE_SYMBOL() {
	    return this.getToken(GISGrammarParser.ZERO_ONE_SYMBOL, 0);
	};

	ONE_ONE_SYMBOL() {
	    return this.getToken(GISGrammarParser.ONE_ONE_SYMBOL, 0);
	};

	ZERO_MANY_SYMBOL() {
	    return this.getToken(GISGrammarParser.ZERO_MANY_SYMBOL, 0);
	};

	ONE_MANY_SYMBOL() {
	    return this.getToken(GISGrammarParser.ONE_MANY_SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterCardinality(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitCardinality(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitCardinality(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SridContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_srid;
    }

	INT_NUMBER() {
	    return this.getToken(GISGrammarParser.INT_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterSrid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitSrid(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitSrid(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_identifier;
    }

	IDENTIFIER() {
	    return this.getToken(GISGrammarParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_text;
    }

	QUOTED_TEXT() {
	    return this.getToken(GISGrammarParser.QUOTED_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitText(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitText(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HexColorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_hexColor;
    }

	HEX_COLOR() {
	    return this.getToken(GISGrammarParser.HEX_COLOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterHexColor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitHexColor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitHexColor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FloatNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_floatNumber;
    }

	FLOAT_NUMBER() {
	    return this.getToken(GISGrammarParser.FLOAT_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterFloatNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitFloatNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitFloatNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IntNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GISGrammarParser.RULE_intNumber;
    }

	INT_NUMBER() {
	    return this.getToken(GISGrammarParser.INT_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.enterIntNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GISGrammarListener ) {
	        listener.exitIntNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GISGrammarVisitor ) {
	        return visitor.visitIntNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




GISGrammarParser.ParseContext = ParseContext; 
GISGrammarParser.SentenceContext = SentenceContext; 
GISGrammarParser.CreateStatementContext = CreateStatementContext; 
GISGrammarParser.CreateGISContext = CreateGISContext; 
GISGrammarParser.CreateEntityContext = CreateEntityContext; 
GISGrammarParser.CreateLayerContext = CreateLayerContext; 
GISGrammarParser.CreateTileLayerContext = CreateTileLayerContext; 
GISGrammarParser.TileOptionContext = TileOptionContext; 
GISGrammarParser.CreateGeoJSONLayerContext = CreateGeoJSONLayerContext; 
GISGrammarParser.SldCustomBodyContext = SldCustomBodyContext; 
GISGrammarParser.CreateWmsStyleContext = CreateWmsStyleContext; 
GISGrammarParser.CreateWmsLayerContext = CreateWmsLayerContext; 
GISGrammarParser.CreateRasterLayerContext = CreateRasterLayerContext; 
GISGrammarParser.WmsSubLayerContext = WmsSubLayerContext; 
GISGrammarParser.WmsUrlContext = WmsUrlContext; 
GISGrammarParser.WmsLayerNameContext = WmsLayerNameContext; 
GISGrammarParser.WmsFormatNameContext = WmsFormatNameContext; 
GISGrammarParser.WmsCrsContext = WmsCrsContext; 
GISGrammarParser.WmsBboxCrsContext = WmsBboxCrsContext; 
GISGrammarParser.WmsMinXContext = WmsMinXContext; 
GISGrammarParser.WmsMinYContext = WmsMinYContext; 
GISGrammarParser.WmsMaxXContext = WmsMaxXContext; 
GISGrammarParser.WmsMaxYContext = WmsMaxYContext; 
GISGrammarParser.WmsBboxGroupContext = WmsBboxGroupContext; 
GISGrammarParser.WmsStylesContext = WmsStylesContext; 
GISGrammarParser.WmsQueryableContext = WmsQueryableContext; 
GISGrammarParser.WmsAttributionContext = WmsAttributionContext; 
GISGrammarParser.WmsVersionContext = WmsVersionContext; 
GISGrammarParser.CreateSortableMapContext = CreateSortableMapContext; 
GISGrammarParser.CreateMapContext = CreateMapContext; 
GISGrammarParser.MapLayerContext = MapLayerContext; 
GISGrammarParser.UseGISContext = UseGISContext; 
GISGrammarParser.GenerateGISContext = GenerateGISContext; 
GISGrammarParser.SetDeploymentContext = SetDeploymentContext; 
GISGrammarParser.DeploymentPropertyContext = DeploymentPropertyContext; 
GISGrammarParser.PropertyContext = PropertyContext; 
GISGrammarParser.PropertyDefinitionContext = PropertyDefinitionContext; 
GISGrammarParser.RelationshipDefinitionContext = RelationshipDefinitionContext; 
GISGrammarParser.MappedRelationshipDefinitionContext = MappedRelationshipDefinitionContext; 
GISGrammarParser.OwnedRelationshipDefinitionContext = OwnedRelationshipDefinitionContext; 
GISGrammarParser.CardinalityContext = CardinalityContext; 
GISGrammarParser.SridContext = SridContext; 
GISGrammarParser.IdentifierContext = IdentifierContext; 
GISGrammarParser.TextContext = TextContext; 
GISGrammarParser.HexColorContext = HexColorContext; 
GISGrammarParser.FloatNumberContext = FloatNumberContext; 
GISGrammarParser.IntNumberContext = IntNumberContext; 
