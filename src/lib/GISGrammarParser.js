// Generated from grammar/GISGrammar.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GISGrammarListener from './GISGrammarListener.js';
import GISGrammarVisitor from './GISGrammarVisitor.js';

const serializedATN = [4,1,63,437,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,1,0,4,0,92,8,0,11,0,12,0,93,1,1,1,1,1,1,1,
1,3,1,100,8,1,1,2,1,2,1,2,1,2,3,2,106,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,
4,1,4,1,4,1,4,1,4,5,4,120,8,4,10,4,12,4,123,9,4,1,4,1,4,1,4,1,5,1,5,1,5,
1,5,1,5,1,5,3,5,134,8,5,1,6,1,6,1,6,1,6,1,6,3,6,141,8,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,154,8,7,1,7,1,7,1,7,3,7,159,8,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,
180,8,8,1,8,3,8,183,8,8,1,8,3,8,186,8,8,1,8,3,8,189,8,8,1,8,3,8,192,8,8,
1,8,3,8,195,8,8,1,8,3,8,198,8,8,1,8,1,8,3,8,202,8,8,1,8,3,8,205,8,8,1,8,
3,8,208,8,8,1,8,1,8,3,8,212,8,8,1,9,1,9,1,9,1,9,1,9,1,9,3,9,220,8,9,1,9,
3,9,223,8,9,1,9,3,9,226,8,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,3,10,236,
8,10,1,10,1,10,1,10,1,10,5,10,242,8,10,10,10,12,10,245,9,10,1,10,1,10,1,
10,1,11,1,11,1,11,1,11,1,11,1,11,3,11,256,8,11,1,11,3,11,259,8,11,1,11,3,
11,262,8,11,1,11,3,11,265,8,11,1,11,3,11,268,8,11,1,11,3,11,271,8,11,1,11,
3,11,274,8,11,3,11,276,8,11,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,
1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,
18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,
1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,
24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,1,27,3,27,342,8,27,
1,27,1,27,1,27,1,27,5,27,348,8,27,10,27,12,27,351,9,27,1,27,1,27,1,27,1,
28,1,28,3,28,358,8,28,1,28,3,28,361,8,28,1,29,1,29,1,29,1,29,1,29,1,30,1,
30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,5,31,379,8,31,10,31,12,31,
382,9,31,1,31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,3,33,392,8,33,1,34,1,34,
1,34,5,34,397,8,34,10,34,12,34,400,9,34,1,35,1,35,3,35,404,8,35,1,36,1,36,
1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,421,
8,37,1,38,1,38,1,39,1,39,1,40,1,40,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,
44,1,44,0,0,45,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,
0,2,2,0,7,7,9,11,1,0,46,49,441,0,91,1,0,0,0,2,99,1,0,0,0,4,101,1,0,0,0,6,
107,1,0,0,0,8,113,1,0,0,0,10,133,1,0,0,0,12,135,1,0,0,0,14,148,1,0,0,0,16,
175,1,0,0,0,18,213,1,0,0,0,20,230,1,0,0,0,22,275,1,0,0,0,24,277,1,0,0,0,
26,280,1,0,0,0,28,284,1,0,0,0,30,288,1,0,0,0,32,292,1,0,0,0,34,296,1,0,0,
0,36,300,1,0,0,0,38,304,1,0,0,0,40,308,1,0,0,0,42,312,1,0,0,0,44,318,1,0,
0,0,46,322,1,0,0,0,48,326,1,0,0,0,50,330,1,0,0,0,52,334,1,0,0,0,54,337,1,
0,0,0,56,355,1,0,0,0,58,362,1,0,0,0,60,367,1,0,0,0,62,372,1,0,0,0,64,386,
1,0,0,0,66,391,1,0,0,0,68,393,1,0,0,0,70,403,1,0,0,0,72,405,1,0,0,0,74,411,
1,0,0,0,76,422,1,0,0,0,78,424,1,0,0,0,80,426,1,0,0,0,82,428,1,0,0,0,84,430,
1,0,0,0,86,432,1,0,0,0,88,434,1,0,0,0,90,92,3,2,1,0,91,90,1,0,0,0,92,93,
1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,1,1,0,0,0,95,100,3,4,2,0,96,100,3,
58,29,0,97,100,3,60,30,0,98,100,3,62,31,0,99,95,1,0,0,0,99,96,1,0,0,0,99,
97,1,0,0,0,99,98,1,0,0,0,100,3,1,0,0,0,101,105,5,1,0,0,102,106,3,6,3,0,103,
106,3,8,4,0,104,106,3,10,5,0,105,102,1,0,0,0,105,103,1,0,0,0,105,104,1,0,
0,0,106,5,1,0,0,0,107,108,5,2,0,0,108,109,3,80,40,0,109,110,5,4,0,0,110,
111,3,78,39,0,111,112,5,56,0,0,112,7,1,0,0,0,113,114,5,3,0,0,114,115,3,80,
40,0,115,116,5,53,0,0,116,121,3,66,33,0,117,118,5,55,0,0,118,120,3,66,33,
0,119,117,1,0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,124,
1,0,0,0,123,121,1,0,0,0,124,125,5,54,0,0,125,126,5,56,0,0,126,9,1,0,0,0,
127,134,3,12,6,0,128,134,3,14,7,0,129,134,3,18,9,0,130,134,3,20,10,0,131,
134,3,54,27,0,132,134,3,52,26,0,133,127,1,0,0,0,133,128,1,0,0,0,133,129,
1,0,0,0,133,130,1,0,0,0,133,131,1,0,0,0,133,132,1,0,0,0,134,11,1,0,0,0,135,
136,5,15,0,0,136,137,5,14,0,0,137,140,3,80,40,0,138,139,5,18,0,0,139,141,
3,82,41,0,140,138,1,0,0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,143,5,53,0,
0,143,144,5,19,0,0,144,145,3,82,41,0,145,146,5,54,0,0,146,147,5,56,0,0,147,
13,1,0,0,0,148,149,5,16,0,0,149,150,5,14,0,0,150,153,3,80,40,0,151,152,5,
18,0,0,152,154,3,82,41,0,153,151,1,0,0,0,153,154,1,0,0,0,154,155,1,0,0,0,
155,156,5,53,0,0,156,158,3,80,40,0,157,159,5,21,0,0,158,157,1,0,0,0,158,
159,1,0,0,0,159,160,1,0,0,0,160,161,5,55,0,0,161,162,5,22,0,0,162,163,3,
84,42,0,163,164,5,55,0,0,164,165,5,23,0,0,165,166,3,84,42,0,166,167,5,55,
0,0,167,168,5,24,0,0,168,169,3,86,43,0,169,170,5,55,0,0,170,171,5,25,0,0,
171,172,3,86,43,0,172,173,5,54,0,0,173,174,5,56,0,0,174,15,1,0,0,0,175,176,
5,17,0,0,176,177,5,50,0,0,177,179,5,55,0,0,178,180,5,22,0,0,179,178,1,0,
0,0,179,180,1,0,0,0,180,182,1,0,0,0,181,183,3,84,42,0,182,181,1,0,0,0,182,
183,1,0,0,0,183,185,1,0,0,0,184,186,5,55,0,0,185,184,1,0,0,0,185,186,1,0,
0,0,186,188,1,0,0,0,187,189,5,23,0,0,188,187,1,0,0,0,188,189,1,0,0,0,189,
191,1,0,0,0,190,192,3,84,42,0,191,190,1,0,0,0,191,192,1,0,0,0,192,194,1,
0,0,0,193,195,5,55,0,0,194,193,1,0,0,0,194,195,1,0,0,0,195,197,1,0,0,0,196,
198,5,24,0,0,197,196,1,0,0,0,197,198,1,0,0,0,198,201,1,0,0,0,199,202,3,86,
43,0,200,202,3,88,44,0,201,199,1,0,0,0,201,200,1,0,0,0,201,202,1,0,0,0,202,
204,1,0,0,0,203,205,5,55,0,0,204,203,1,0,0,0,204,205,1,0,0,0,205,207,1,0,
0,0,206,208,5,25,0,0,207,206,1,0,0,0,207,208,1,0,0,0,208,211,1,0,0,0,209,
212,3,86,43,0,210,212,3,88,44,0,211,209,1,0,0,0,211,210,1,0,0,0,211,212,
1,0,0,0,212,17,1,0,0,0,213,214,5,26,0,0,214,215,5,27,0,0,215,216,3,80,40,
0,216,219,5,53,0,0,217,218,5,20,0,0,218,220,3,82,41,0,219,217,1,0,0,0,219,
220,1,0,0,0,220,222,1,0,0,0,221,223,5,55,0,0,222,221,1,0,0,0,222,223,1,0,
0,0,223,225,1,0,0,0,224,226,3,16,8,0,225,224,1,0,0,0,225,226,1,0,0,0,226,
227,1,0,0,0,227,228,5,54,0,0,228,229,5,56,0,0,229,19,1,0,0,0,230,231,5,26,
0,0,231,232,5,14,0,0,232,235,3,80,40,0,233,234,5,18,0,0,234,236,3,82,41,
0,235,233,1,0,0,0,235,236,1,0,0,0,236,237,1,0,0,0,237,238,5,53,0,0,238,243,
3,22,11,0,239,240,5,55,0,0,240,242,3,22,11,0,241,239,1,0,0,0,242,245,1,0,
0,0,243,241,1,0,0,0,243,244,1,0,0,0,244,246,1,0,0,0,245,243,1,0,0,0,246,
247,5,54,0,0,247,248,5,56,0,0,248,21,1,0,0,0,249,250,3,80,40,0,250,251,3,
80,40,0,251,276,1,0,0,0,252,253,3,24,12,0,253,255,3,26,13,0,254,256,3,28,
14,0,255,254,1,0,0,0,255,256,1,0,0,0,256,258,1,0,0,0,257,259,3,30,15,0,258,
257,1,0,0,0,258,259,1,0,0,0,259,261,1,0,0,0,260,262,3,44,22,0,261,260,1,
0,0,0,261,262,1,0,0,0,262,264,1,0,0,0,263,265,3,46,23,0,264,263,1,0,0,0,
264,265,1,0,0,0,265,267,1,0,0,0,266,268,3,48,24,0,267,266,1,0,0,0,267,268,
1,0,0,0,268,270,1,0,0,0,269,271,3,42,21,0,270,269,1,0,0,0,270,271,1,0,0,
0,271,273,1,0,0,0,272,274,3,50,25,0,273,272,1,0,0,0,273,274,1,0,0,0,274,
276,1,0,0,0,275,249,1,0,0,0,275,252,1,0,0,0,276,23,1,0,0,0,277,278,5,34,
0,0,278,279,3,82,41,0,279,25,1,0,0,0,280,281,5,55,0,0,281,282,5,35,0,0,282,
283,3,82,41,0,283,27,1,0,0,0,284,285,5,55,0,0,285,286,5,36,0,0,286,287,3,
82,41,0,287,29,1,0,0,0,288,289,5,55,0,0,289,290,5,37,0,0,290,291,3,82,41,
0,291,31,1,0,0,0,292,293,5,55,0,0,293,294,5,38,0,0,294,295,3,82,41,0,295,
33,1,0,0,0,296,297,5,55,0,0,297,298,5,39,0,0,298,299,3,86,43,0,299,35,1,
0,0,0,300,301,5,55,0,0,301,302,5,40,0,0,302,303,3,86,43,0,303,37,1,0,0,0,
304,305,5,55,0,0,305,306,5,41,0,0,306,307,3,86,43,0,307,39,1,0,0,0,308,309,
5,55,0,0,309,310,5,42,0,0,310,311,3,86,43,0,311,41,1,0,0,0,312,313,3,32,
16,0,313,314,3,34,17,0,314,315,3,36,18,0,315,316,3,38,19,0,316,317,3,40,
20,0,317,43,1,0,0,0,318,319,5,55,0,0,319,320,5,27,0,0,320,321,3,82,41,0,
321,45,1,0,0,0,322,323,5,55,0,0,323,324,5,43,0,0,324,325,3,82,41,0,325,47,
1,0,0,0,326,327,5,55,0,0,327,328,5,44,0,0,328,329,3,82,41,0,329,49,1,0,0,
0,330,331,5,55,0,0,331,332,5,45,0,0,332,333,3,82,41,0,333,51,1,0,0,0,334,
335,5,30,0,0,335,336,3,54,27,0,336,53,1,0,0,0,337,338,5,31,0,0,338,341,3,
80,40,0,339,340,5,18,0,0,340,342,3,82,41,0,341,339,1,0,0,0,341,342,1,0,0,
0,342,343,1,0,0,0,343,344,5,53,0,0,344,349,3,56,28,0,345,346,5,55,0,0,346,
348,3,56,28,0,347,345,1,0,0,0,348,351,1,0,0,0,349,347,1,0,0,0,349,350,1,
0,0,0,350,352,1,0,0,0,351,349,1,0,0,0,352,353,5,54,0,0,353,354,5,56,0,0,
354,55,1,0,0,0,355,357,3,80,40,0,356,358,5,28,0,0,357,356,1,0,0,0,357,358,
1,0,0,0,358,360,1,0,0,0,359,361,5,29,0,0,360,359,1,0,0,0,360,361,1,0,0,0,
361,57,1,0,0,0,362,363,5,5,0,0,363,364,5,2,0,0,364,365,3,80,40,0,365,366,
5,56,0,0,366,59,1,0,0,0,367,368,5,6,0,0,368,369,5,2,0,0,369,370,3,80,40,
0,370,371,5,56,0,0,371,61,1,0,0,0,372,373,5,32,0,0,373,374,5,33,0,0,374,
375,5,53,0,0,375,380,3,64,32,0,376,377,5,55,0,0,377,379,3,64,32,0,378,376,
1,0,0,0,379,382,1,0,0,0,380,378,1,0,0,0,380,381,1,0,0,0,381,383,1,0,0,0,
382,380,1,0,0,0,383,384,5,54,0,0,384,385,5,56,0,0,385,63,1,0,0,0,386,387,
3,82,41,0,387,388,3,82,41,0,388,65,1,0,0,0,389,392,3,68,34,0,390,392,3,70,
35,0,391,389,1,0,0,0,391,390,1,0,0,0,392,67,1,0,0,0,393,394,3,80,40,0,394,
398,5,50,0,0,395,397,7,0,0,0,396,395,1,0,0,0,397,400,1,0,0,0,398,396,1,0,
0,0,398,399,1,0,0,0,399,69,1,0,0,0,400,398,1,0,0,0,401,404,3,74,37,0,402,
404,3,72,36,0,403,401,1,0,0,0,403,402,1,0,0,0,404,71,1,0,0,0,405,406,3,80,
40,0,406,407,3,80,40,0,407,408,5,8,0,0,408,409,5,13,0,0,409,410,3,80,40,
0,410,73,1,0,0,0,411,412,3,80,40,0,412,413,3,80,40,0,413,414,5,8,0,0,414,
415,5,53,0,0,415,416,3,76,38,0,416,417,5,55,0,0,417,418,3,76,38,0,418,420,
5,54,0,0,419,421,5,12,0,0,420,419,1,0,0,0,420,421,1,0,0,0,421,75,1,0,0,0,
422,423,7,1,0,0,423,77,1,0,0,0,424,425,5,58,0,0,425,79,1,0,0,0,426,427,5,
62,0,0,427,81,1,0,0,0,428,429,5,63,0,0,429,83,1,0,0,0,430,431,5,57,0,0,431,
85,1,0,0,0,432,433,5,59,0,0,433,87,1,0,0,0,434,435,5,58,0,0,435,89,1,0,0,
0,41,93,99,105,121,133,140,153,158,179,182,185,188,191,194,197,201,204,207,
211,219,222,225,235,243,255,258,261,264,267,270,273,275,341,349,357,360,
380,391,398,403,420];


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
                            null, null, null, null, null, null, "'0..1'", 
                            "'1..1'", "'0..*'", "'1..*'", null, "'#'", "'.'", 
                            "'('", "')'", "','", "';'" ];
    static symbolicNames = [ null, "CREATE_SYMBOL", "GIS_SYMBOL", "ENTITY_SYMBOL", 
                             "USING_SYMBOL", "USE_SYMBOL", "GENERATE_SYMBOL", 
                             "IDENTIFIER_SYMBOL", "RELATIONSHIP_SYMBOL", 
                             "DISPLAYSTRING_SYMBOL", "REQUIRED_SYMBOL", 
                             "UNIQUE_SYMBOL", "BIDIRECTIONAL_SYMBOL", "MAPPEDBY_SYMBOL", 
                             "LAYER_SYMBOL", "TILE_SYMBOL", "GEOJSON_SYMBOL", 
                             "GEOMETRY_TYPE_SYMBOL", "AS_SYMBOL", "URL_SYMBOL", 
                             "SLD_SYMBOL", "EDITABLE_SYMBOL", "FILL_COLOR_SYMBOL", 
                             "STROKE_COLOR_SYMBOL", "FILL_OPACITY_SYMBOL", 
                             "STROKE_OPACITY_SYMBOL", "WMS_SYMBOL", "STYLE_SYMBOL", 
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
                         "createGeoJSONLayer", "sldCustomBody", "createWmsStyle", 
                         "createWmsLayer", "wmsSubLayer", "wmsUrl", "wmsLayerName", 
                         "wmsFormatName", "wmsCrs", "wmsBboxCrs", "wmsMinX", 
                         "wmsMinY", "wmsMaxX", "wmsMaxY", "wmsBboxGroup", 
                         "wmsStyles", "wmsQueryable", "wmsAttribution", 
                         "wmsVersion", "createSortableMap", "createMap", 
                         "mapLayer", "useGIS", "generateGIS", "setDeployment", 
                         "deploymentProperty", "property", "propertyDefinition", 
                         "relationshipDefinition", "mappedRelationshipDefinition", 
                         "ownedRelationshipDefinition", "cardinality", "srid", 
                         "identifier", "text", "hexColor", "floatNumber", 
                         "intNumber" ];

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
	        this.state = 91; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 90;
	            this.sentence();
	            this.state = 93; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 1)) & ~0x1f) === 0 && ((1 << (_la - 1)) & 2147483697) !== 0));
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
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.createStatement();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.useGIS();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.generateGIS();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 98;
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
	        this.state = 101;
	        this.match(GISGrammarParser.CREATE_SYMBOL);
	        this.state = 105;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 102;
	            this.createGIS();
	            break;
	        case 3:
	            this.state = 103;
	            this.createEntity();
	            break;
	        case 15:
	        case 16:
	        case 26:
	        case 30:
	        case 31:
	            this.state = 104;
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
	        this.state = 107;
	        this.match(GISGrammarParser.GIS_SYMBOL);
	        this.state = 108;
	        this.identifier();
	        this.state = 109;
	        this.match(GISGrammarParser.USING_SYMBOL);
	        this.state = 110;
	        this.srid();
	        this.state = 111;
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
	        this.state = 113;
	        this.match(GISGrammarParser.ENTITY_SYMBOL);
	        this.state = 114;
	        this.identifier();
	        this.state = 115;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 116;
	        this.property();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===55) {
	            this.state = 117;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 118;
	            this.property();
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 124;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 125;
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
	        this.state = 133;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 127;
	            this.createTileLayer();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 128;
	            this.createGeoJSONLayer();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 129;
	            this.createWmsStyle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 130;
	            this.createWmsLayer();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 131;
	            this.createMap();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 132;
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
	        this.state = 135;
	        this.match(GISGrammarParser.TILE_SYMBOL);
	        this.state = 136;
	        this.match(GISGrammarParser.LAYER_SYMBOL);
	        this.state = 137;
	        this.identifier();
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 138;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 139;
	            this.text();
	        }

	        this.state = 142;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 143;
	        this.match(GISGrammarParser.URL_SYMBOL);
	        this.state = 144;
	        this.text();
	        this.state = 145;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 146;
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



	createGeoJSONLayer() {
	    let localctx = new CreateGeoJSONLayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GISGrammarParser.RULE_createGeoJSONLayer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(GISGrammarParser.GEOJSON_SYMBOL);
	        this.state = 149;
	        this.match(GISGrammarParser.LAYER_SYMBOL);
	        this.state = 150;
	        this.identifier();
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 151;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 152;
	            this.text();
	        }

	        this.state = 155;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 156;
	        this.identifier();
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 157;
	            this.match(GISGrammarParser.EDITABLE_SYMBOL);
	        }

	        this.state = 160;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 161;
	        this.match(GISGrammarParser.FILL_COLOR_SYMBOL);
	        this.state = 162;
	        this.hexColor();
	        this.state = 163;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 164;
	        this.match(GISGrammarParser.STROKE_COLOR_SYMBOL);
	        this.state = 165;
	        this.hexColor();
	        this.state = 166;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 167;
	        this.match(GISGrammarParser.FILL_OPACITY_SYMBOL);
	        this.state = 168;
	        this.floatNumber();
	        this.state = 169;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 170;
	        this.match(GISGrammarParser.STROKE_OPACITY_SYMBOL);
	        this.state = 171;
	        this.floatNumber();
	        this.state = 172;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 173;
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
	    this.enterRule(localctx, 16, GISGrammarParser.RULE_sldCustomBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(GISGrammarParser.GEOMETRY_TYPE_SYMBOL);
	        this.state = 176;
	        this.match(GISGrammarParser.TYPE);
	        this.state = 177;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 178;
	            this.match(GISGrammarParser.FILL_COLOR_SYMBOL);
	        }

	        this.state = 182;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 181;
	            this.hexColor();

	        }
	        this.state = 185;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 184;
	            this.match(GISGrammarParser.COMMA_SYMBOL);

	        }
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 187;
	            this.match(GISGrammarParser.STROKE_COLOR_SYMBOL);
	        }

	        this.state = 191;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===57) {
	            this.state = 190;
	            this.hexColor();
	        }

	        this.state = 194;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 193;
	            this.match(GISGrammarParser.COMMA_SYMBOL);

	        }
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 196;
	            this.match(GISGrammarParser.FILL_OPACITY_SYMBOL);
	        }

	        this.state = 201;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 199;
	            this.floatNumber();

	        } else if(la_===2) {
	            this.state = 200;
	            this.intNumber();

	        }
	        this.state = 204;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===55) {
	            this.state = 203;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	        }

	        this.state = 207;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 206;
	            this.match(GISGrammarParser.STROKE_OPACITY_SYMBOL);
	        }

	        this.state = 211;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 59:
	        	this.state = 209;
	        	this.floatNumber();
	        	break;
	        case 58:
	        	this.state = 210;
	        	this.intNumber();
	        	break;
	        case 54:
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
	    this.enterRule(localctx, 18, GISGrammarParser.RULE_createWmsStyle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.match(GISGrammarParser.WMS_SYMBOL);
	        this.state = 214;
	        this.match(GISGrammarParser.STYLE_SYMBOL);
	        this.state = 215;
	        this.identifier();
	        this.state = 216;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 219;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 217;
	            this.match(GISGrammarParser.SLD_SYMBOL);
	            this.state = 218;
	            this.text();
	        }

	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===55) {
	            this.state = 221;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	        }

	        this.state = 225;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 224;
	            this.sldCustomBody();
	        }

	        this.state = 227;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 228;
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
	    this.enterRule(localctx, 20, GISGrammarParser.RULE_createWmsLayer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.match(GISGrammarParser.WMS_SYMBOL);
	        this.state = 231;
	        this.match(GISGrammarParser.LAYER_SYMBOL);
	        this.state = 232;
	        this.identifier();
	        this.state = 235;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 233;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 234;
	            this.text();
	        }

	        this.state = 237;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 238;
	        this.wmsSubLayer();
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===55) {
	            this.state = 239;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 240;
	            this.wmsSubLayer();
	            this.state = 245;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 246;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 247;
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
	    this.enterRule(localctx, 22, GISGrammarParser.RULE_wmsSubLayer);
	    try {
	        this.state = 275;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 62:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 249;
	            this.identifier();
	            this.state = 250;
	            this.identifier();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 252;
	            this.wmsUrl();
	            this.state = 253;
	            this.wmsLayerName();
	            this.state = 255;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            if(la_===1) {
	                this.state = 254;
	                this.wmsFormatName();

	            }
	            this.state = 258;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	            if(la_===1) {
	                this.state = 257;
	                this.wmsCrs();

	            }
	            this.state = 261;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	            if(la_===1) {
	                this.state = 260;
	                this.wmsStyles();

	            }
	            this.state = 264;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	            if(la_===1) {
	                this.state = 263;
	                this.wmsQueryable();

	            }
	            this.state = 267;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	            if(la_===1) {
	                this.state = 266;
	                this.wmsAttribution();

	            }
	            this.state = 270;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	            if(la_===1) {
	                this.state = 269;
	                this.wmsBboxGroup();

	            }
	            this.state = 273;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	            if(la_===1) {
	                this.state = 272;
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
	    this.enterRule(localctx, 24, GISGrammarParser.RULE_wmsUrl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.match(GISGrammarParser.URL_WMS_SYMBOL);
	        this.state = 278;
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
	    this.enterRule(localctx, 26, GISGrammarParser.RULE_wmsLayerName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 281;
	        this.match(GISGrammarParser.LAYERNAME_SYMBOL);
	        this.state = 282;
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
	    this.enterRule(localctx, 28, GISGrammarParser.RULE_wmsFormatName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 285;
	        this.match(GISGrammarParser.FORMAT_SYMBOL);
	        this.state = 286;
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
	    this.enterRule(localctx, 30, GISGrammarParser.RULE_wmsCrs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 289;
	        this.match(GISGrammarParser.CRS_SYMBOL);
	        this.state = 290;
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
	    this.enterRule(localctx, 32, GISGrammarParser.RULE_wmsBboxCrs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 293;
	        this.match(GISGrammarParser.BBOX_CRS_SYMBOL);
	        this.state = 294;
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
	    this.enterRule(localctx, 34, GISGrammarParser.RULE_wmsMinX);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 297;
	        this.match(GISGrammarParser.MINX_SYMBOL);
	        this.state = 298;
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
	    this.enterRule(localctx, 36, GISGrammarParser.RULE_wmsMinY);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 301;
	        this.match(GISGrammarParser.MINY_SYMBOL);
	        this.state = 302;
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
	    this.enterRule(localctx, 38, GISGrammarParser.RULE_wmsMaxX);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 305;
	        this.match(GISGrammarParser.MAXX_SYMBOL);
	        this.state = 306;
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
	    this.enterRule(localctx, 40, GISGrammarParser.RULE_wmsMaxY);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 309;
	        this.match(GISGrammarParser.MAXY_SYMBOL);
	        this.state = 310;
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
	    this.enterRule(localctx, 42, GISGrammarParser.RULE_wmsBboxGroup);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this.wmsBboxCrs();
	        this.state = 313;
	        this.wmsMinX();
	        this.state = 314;
	        this.wmsMinY();
	        this.state = 315;
	        this.wmsMaxX();
	        this.state = 316;
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
	    this.enterRule(localctx, 44, GISGrammarParser.RULE_wmsStyles);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 319;
	        this.match(GISGrammarParser.STYLE_SYMBOL);
	        this.state = 320;
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
	    this.enterRule(localctx, 46, GISGrammarParser.RULE_wmsQueryable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 323;
	        this.match(GISGrammarParser.QUERYABLE_SYMBOL);
	        this.state = 324;
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
	    this.enterRule(localctx, 48, GISGrammarParser.RULE_wmsAttribution);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 327;
	        this.match(GISGrammarParser.ATTRIBUTION_SYMBOL);
	        this.state = 328;
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
	    this.enterRule(localctx, 50, GISGrammarParser.RULE_wmsVersion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 331;
	        this.match(GISGrammarParser.VERSION_SYMBOL);
	        this.state = 332;
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
	    this.enterRule(localctx, 52, GISGrammarParser.RULE_createSortableMap);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        this.match(GISGrammarParser.SORTABLE_SYMBOL);
	        this.state = 335;
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
	    this.enterRule(localctx, 54, GISGrammarParser.RULE_createMap);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 337;
	        this.match(GISGrammarParser.MAP_SYMBOL);
	        this.state = 338;
	        this.identifier();
	        this.state = 341;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 339;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 340;
	            this.text();
	        }

	        this.state = 343;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 344;
	        this.mapLayer();
	        this.state = 349;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===55) {
	            this.state = 345;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 346;
	            this.mapLayer();
	            this.state = 351;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 352;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 353;
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
	    this.enterRule(localctx, 56, GISGrammarParser.RULE_mapLayer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.identifier();
	        this.state = 357;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 356;
	            this.match(GISGrammarParser.IS_BASE_LAYER_SYMBOL);
	        }

	        this.state = 360;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 359;
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
	    this.enterRule(localctx, 58, GISGrammarParser.RULE_useGIS);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 362;
	        this.match(GISGrammarParser.USE_SYMBOL);
	        this.state = 363;
	        this.match(GISGrammarParser.GIS_SYMBOL);
	        this.state = 364;
	        this.identifier();
	        this.state = 365;
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
	    this.enterRule(localctx, 60, GISGrammarParser.RULE_generateGIS);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 367;
	        this.match(GISGrammarParser.GENERATE_SYMBOL);
	        this.state = 368;
	        this.match(GISGrammarParser.GIS_SYMBOL);
	        this.state = 369;
	        this.identifier();
	        this.state = 370;
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
	    this.enterRule(localctx, 62, GISGrammarParser.RULE_setDeployment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 372;
	        this.match(GISGrammarParser.SET_SYMBOL);
	        this.state = 373;
	        this.match(GISGrammarParser.DEPLOYMENT_SYMBOL);
	        this.state = 374;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 375;
	        this.deploymentProperty();
	        this.state = 380;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===55) {
	            this.state = 376;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 377;
	            this.deploymentProperty();
	            this.state = 382;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 383;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 384;
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
	    this.enterRule(localctx, 64, GISGrammarParser.RULE_deploymentProperty);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.text();
	        this.state = 387;
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
	    this.enterRule(localctx, 66, GISGrammarParser.RULE_property);
	    try {
	        this.state = 391;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 389;
	            this.propertyDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 390;
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
	    this.enterRule(localctx, 68, GISGrammarParser.RULE_propertyDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
	        this.identifier();
	        this.state = 394;
	        this.match(GISGrammarParser.TYPE);
	        this.state = 398;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3712) !== 0)) {
	            this.state = 395;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3712) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 400;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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
	    this.enterRule(localctx, 70, GISGrammarParser.RULE_relationshipDefinition);
	    try {
	        this.state = 403;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 401;
	            this.ownedRelationshipDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 402;
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
	    this.enterRule(localctx, 72, GISGrammarParser.RULE_mappedRelationshipDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
	        this.identifier();
	        this.state = 406;
	        this.identifier();
	        this.state = 407;
	        this.match(GISGrammarParser.RELATIONSHIP_SYMBOL);
	        this.state = 408;
	        this.match(GISGrammarParser.MAPPEDBY_SYMBOL);
	        this.state = 409;
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
	    this.enterRule(localctx, 74, GISGrammarParser.RULE_ownedRelationshipDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 411;
	        this.identifier();
	        this.state = 412;
	        this.identifier();
	        this.state = 413;
	        this.match(GISGrammarParser.RELATIONSHIP_SYMBOL);
	        this.state = 414;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 415;
	        this.cardinality();
	        this.state = 416;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 417;
	        this.cardinality();
	        this.state = 418;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 420;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 419;
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
	    this.enterRule(localctx, 76, GISGrammarParser.RULE_cardinality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 422;
	        _la = this._input.LA(1);
	        if(!(((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 15) !== 0))) {
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
	    this.enterRule(localctx, 78, GISGrammarParser.RULE_srid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 424;
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
	    this.enterRule(localctx, 80, GISGrammarParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 426;
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
	    this.enterRule(localctx, 82, GISGrammarParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 428;
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
	    this.enterRule(localctx, 84, GISGrammarParser.RULE_hexColor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 430;
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
	    this.enterRule(localctx, 86, GISGrammarParser.RULE_floatNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 432;
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
	    this.enterRule(localctx, 88, GISGrammarParser.RULE_intNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 434;
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
GISGrammarParser.WMS_SYMBOL = 26;
GISGrammarParser.STYLE_SYMBOL = 27;
GISGrammarParser.IS_BASE_LAYER_SYMBOL = 28;
GISGrammarParser.HIDDEN_SYMBOL = 29;
GISGrammarParser.SORTABLE_SYMBOL = 30;
GISGrammarParser.MAP_SYMBOL = 31;
GISGrammarParser.SET_SYMBOL = 32;
GISGrammarParser.DEPLOYMENT_SYMBOL = 33;
GISGrammarParser.URL_WMS_SYMBOL = 34;
GISGrammarParser.LAYERNAME_SYMBOL = 35;
GISGrammarParser.FORMAT_SYMBOL = 36;
GISGrammarParser.CRS_SYMBOL = 37;
GISGrammarParser.BBOX_CRS_SYMBOL = 38;
GISGrammarParser.MINX_SYMBOL = 39;
GISGrammarParser.MINY_SYMBOL = 40;
GISGrammarParser.MAXX_SYMBOL = 41;
GISGrammarParser.MAXY_SYMBOL = 42;
GISGrammarParser.QUERYABLE_SYMBOL = 43;
GISGrammarParser.ATTRIBUTION_SYMBOL = 44;
GISGrammarParser.VERSION_SYMBOL = 45;
GISGrammarParser.ZERO_ONE_SYMBOL = 46;
GISGrammarParser.ONE_ONE_SYMBOL = 47;
GISGrammarParser.ZERO_MANY_SYMBOL = 48;
GISGrammarParser.ONE_MANY_SYMBOL = 49;
GISGrammarParser.TYPE = 50;
GISGrammarParser.POUND_SYMBOL = 51;
GISGrammarParser.DOT_SYMBOL = 52;
GISGrammarParser.OPAR_SYMBOL = 53;
GISGrammarParser.CPAR_SYMBOL = 54;
GISGrammarParser.COMMA_SYMBOL = 55;
GISGrammarParser.SCOL_SYMBOL = 56;
GISGrammarParser.HEX_COLOR = 57;
GISGrammarParser.INT_NUMBER = 58;
GISGrammarParser.FLOAT_NUMBER = 59;
GISGrammarParser.COMMENT = 60;
GISGrammarParser.WHITESPACE = 61;
GISGrammarParser.IDENTIFIER = 62;
GISGrammarParser.QUOTED_TEXT = 63;

GISGrammarParser.RULE_parse = 0;
GISGrammarParser.RULE_sentence = 1;
GISGrammarParser.RULE_createStatement = 2;
GISGrammarParser.RULE_createGIS = 3;
GISGrammarParser.RULE_createEntity = 4;
GISGrammarParser.RULE_createLayer = 5;
GISGrammarParser.RULE_createTileLayer = 6;
GISGrammarParser.RULE_createGeoJSONLayer = 7;
GISGrammarParser.RULE_sldCustomBody = 8;
GISGrammarParser.RULE_createWmsStyle = 9;
GISGrammarParser.RULE_createWmsLayer = 10;
GISGrammarParser.RULE_wmsSubLayer = 11;
GISGrammarParser.RULE_wmsUrl = 12;
GISGrammarParser.RULE_wmsLayerName = 13;
GISGrammarParser.RULE_wmsFormatName = 14;
GISGrammarParser.RULE_wmsCrs = 15;
GISGrammarParser.RULE_wmsBboxCrs = 16;
GISGrammarParser.RULE_wmsMinX = 17;
GISGrammarParser.RULE_wmsMinY = 18;
GISGrammarParser.RULE_wmsMaxX = 19;
GISGrammarParser.RULE_wmsMaxY = 20;
GISGrammarParser.RULE_wmsBboxGroup = 21;
GISGrammarParser.RULE_wmsStyles = 22;
GISGrammarParser.RULE_wmsQueryable = 23;
GISGrammarParser.RULE_wmsAttribution = 24;
GISGrammarParser.RULE_wmsVersion = 25;
GISGrammarParser.RULE_createSortableMap = 26;
GISGrammarParser.RULE_createMap = 27;
GISGrammarParser.RULE_mapLayer = 28;
GISGrammarParser.RULE_useGIS = 29;
GISGrammarParser.RULE_generateGIS = 30;
GISGrammarParser.RULE_setDeployment = 31;
GISGrammarParser.RULE_deploymentProperty = 32;
GISGrammarParser.RULE_property = 33;
GISGrammarParser.RULE_propertyDefinition = 34;
GISGrammarParser.RULE_relationshipDefinition = 35;
GISGrammarParser.RULE_mappedRelationshipDefinition = 36;
GISGrammarParser.RULE_ownedRelationshipDefinition = 37;
GISGrammarParser.RULE_cardinality = 38;
GISGrammarParser.RULE_srid = 39;
GISGrammarParser.RULE_identifier = 40;
GISGrammarParser.RULE_text = 41;
GISGrammarParser.RULE_hexColor = 42;
GISGrammarParser.RULE_floatNumber = 43;
GISGrammarParser.RULE_intNumber = 44;

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
GISGrammarParser.CreateGeoJSONLayerContext = CreateGeoJSONLayerContext; 
GISGrammarParser.SldCustomBodyContext = SldCustomBodyContext; 
GISGrammarParser.CreateWmsStyleContext = CreateWmsStyleContext; 
GISGrammarParser.CreateWmsLayerContext = CreateWmsLayerContext; 
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
