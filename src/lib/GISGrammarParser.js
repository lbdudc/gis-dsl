// Generated from grammar/GISGrammar.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GISGrammarListener from './GISGrammarListener.js';
import GISGrammarVisitor from './GISGrammarVisitor.js';

const serializedATN = [4,1,51,321,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,1,0,4,0,62,8,0,11,0,12,0,63,1,1,1,1,1,1,1,1,3,1,
70,8,1,1,2,1,2,1,2,1,2,3,2,76,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,
4,1,4,1,4,5,4,90,8,4,10,4,12,4,93,9,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,
5,3,5,104,8,5,1,6,1,6,1,6,1,6,1,6,3,6,111,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
7,1,7,1,7,1,7,1,7,3,7,124,8,7,1,7,1,7,1,7,3,7,129,8,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,150,8,8,1,
8,3,8,153,8,8,1,8,3,8,156,8,8,1,8,3,8,159,8,8,1,8,3,8,162,8,8,1,8,3,8,165,
8,8,1,8,3,8,168,8,8,1,8,3,8,171,8,8,1,8,3,8,174,8,8,1,8,3,8,177,8,8,1,8,
3,8,180,8,8,1,9,1,9,1,9,1,9,1,9,1,9,3,9,188,8,9,1,9,3,9,191,8,9,1,9,3,9,
194,8,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,3,10,204,8,10,1,10,1,10,1,10,
1,10,5,10,210,8,10,10,10,12,10,213,9,10,1,10,1,10,1,10,1,11,1,11,1,11,1,
12,1,12,1,12,1,13,1,13,1,13,1,13,3,13,228,8,13,1,13,1,13,1,13,1,13,5,13,
234,8,13,10,13,12,13,237,9,13,1,13,1,13,1,13,1,14,1,14,3,14,244,8,14,1,14,
3,14,247,8,14,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,
1,17,1,17,1,17,1,17,5,17,265,8,17,10,17,12,17,268,9,17,1,17,1,17,1,17,1,
18,1,18,1,18,1,19,1,19,3,19,278,8,19,1,20,1,20,1,20,5,20,283,8,20,10,20,
12,20,286,9,20,1,21,1,21,3,21,290,8,21,1,22,1,22,1,22,1,22,1,22,1,22,1,23,
1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,307,8,23,1,24,1,24,1,25,1,25,
1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,29,0,0,30,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,0,2,2,0,7,
7,9,11,1,0,34,37,330,0,61,1,0,0,0,2,69,1,0,0,0,4,71,1,0,0,0,6,77,1,0,0,0,
8,83,1,0,0,0,10,103,1,0,0,0,12,105,1,0,0,0,14,118,1,0,0,0,16,145,1,0,0,0,
18,181,1,0,0,0,20,198,1,0,0,0,22,217,1,0,0,0,24,220,1,0,0,0,26,223,1,0,0,
0,28,241,1,0,0,0,30,248,1,0,0,0,32,253,1,0,0,0,34,258,1,0,0,0,36,272,1,0,
0,0,38,277,1,0,0,0,40,279,1,0,0,0,42,289,1,0,0,0,44,291,1,0,0,0,46,297,1,
0,0,0,48,308,1,0,0,0,50,310,1,0,0,0,52,312,1,0,0,0,54,314,1,0,0,0,56,316,
1,0,0,0,58,318,1,0,0,0,60,62,3,2,1,0,61,60,1,0,0,0,62,63,1,0,0,0,63,61,1,
0,0,0,63,64,1,0,0,0,64,1,1,0,0,0,65,70,3,4,2,0,66,70,3,30,15,0,67,70,3,32,
16,0,68,70,3,34,17,0,69,65,1,0,0,0,69,66,1,0,0,0,69,67,1,0,0,0,69,68,1,0,
0,0,70,3,1,0,0,0,71,75,5,1,0,0,72,76,3,6,3,0,73,76,3,8,4,0,74,76,3,10,5,
0,75,72,1,0,0,0,75,73,1,0,0,0,75,74,1,0,0,0,76,5,1,0,0,0,77,78,5,2,0,0,78,
79,3,52,26,0,79,80,5,4,0,0,80,81,3,50,25,0,81,82,5,44,0,0,82,7,1,0,0,0,83,
84,5,3,0,0,84,85,3,52,26,0,85,86,5,41,0,0,86,91,3,38,19,0,87,88,5,43,0,0,
88,90,3,38,19,0,89,87,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,
92,94,1,0,0,0,93,91,1,0,0,0,94,95,5,42,0,0,95,96,5,44,0,0,96,9,1,0,0,0,97,
104,3,12,6,0,98,104,3,14,7,0,99,104,3,18,9,0,100,104,3,20,10,0,101,104,3,
26,13,0,102,104,3,24,12,0,103,97,1,0,0,0,103,98,1,0,0,0,103,99,1,0,0,0,103,
100,1,0,0,0,103,101,1,0,0,0,103,102,1,0,0,0,104,11,1,0,0,0,105,106,5,15,
0,0,106,107,5,14,0,0,107,110,3,52,26,0,108,109,5,18,0,0,109,111,3,54,27,
0,110,108,1,0,0,0,110,111,1,0,0,0,111,112,1,0,0,0,112,113,5,41,0,0,113,114,
5,19,0,0,114,115,3,54,27,0,115,116,5,42,0,0,116,117,5,44,0,0,117,13,1,0,
0,0,118,119,5,16,0,0,119,120,5,14,0,0,120,123,3,52,26,0,121,122,5,18,0,0,
122,124,3,54,27,0,123,121,1,0,0,0,123,124,1,0,0,0,124,125,1,0,0,0,125,126,
5,41,0,0,126,128,3,52,26,0,127,129,5,21,0,0,128,127,1,0,0,0,128,129,1,0,
0,0,129,130,1,0,0,0,130,131,5,43,0,0,131,132,5,22,0,0,132,133,3,56,28,0,
133,134,5,43,0,0,134,135,5,23,0,0,135,136,3,56,28,0,136,137,5,43,0,0,137,
138,5,24,0,0,138,139,3,58,29,0,139,140,5,43,0,0,140,141,5,25,0,0,141,142,
3,58,29,0,142,143,5,42,0,0,143,144,5,44,0,0,144,15,1,0,0,0,145,146,5,17,
0,0,146,147,5,38,0,0,147,149,5,43,0,0,148,150,5,22,0,0,149,148,1,0,0,0,149,
150,1,0,0,0,150,152,1,0,0,0,151,153,3,56,28,0,152,151,1,0,0,0,152,153,1,
0,0,0,153,155,1,0,0,0,154,156,5,43,0,0,155,154,1,0,0,0,155,156,1,0,0,0,156,
158,1,0,0,0,157,159,5,23,0,0,158,157,1,0,0,0,158,159,1,0,0,0,159,161,1,0,
0,0,160,162,3,56,28,0,161,160,1,0,0,0,161,162,1,0,0,0,162,164,1,0,0,0,163,
165,5,43,0,0,164,163,1,0,0,0,164,165,1,0,0,0,165,167,1,0,0,0,166,168,5,24,
0,0,167,166,1,0,0,0,167,168,1,0,0,0,168,170,1,0,0,0,169,171,3,58,29,0,170,
169,1,0,0,0,170,171,1,0,0,0,171,173,1,0,0,0,172,174,5,43,0,0,173,172,1,0,
0,0,173,174,1,0,0,0,174,176,1,0,0,0,175,177,5,25,0,0,176,175,1,0,0,0,176,
177,1,0,0,0,177,179,1,0,0,0,178,180,3,58,29,0,179,178,1,0,0,0,179,180,1,
0,0,0,180,17,1,0,0,0,181,182,5,26,0,0,182,183,5,27,0,0,183,184,3,52,26,0,
184,187,5,41,0,0,185,186,5,20,0,0,186,188,3,54,27,0,187,185,1,0,0,0,187,
188,1,0,0,0,188,190,1,0,0,0,189,191,5,43,0,0,190,189,1,0,0,0,190,191,1,0,
0,0,191,193,1,0,0,0,192,194,3,16,8,0,193,192,1,0,0,0,193,194,1,0,0,0,194,
195,1,0,0,0,195,196,5,42,0,0,196,197,5,44,0,0,197,19,1,0,0,0,198,199,5,26,
0,0,199,200,5,14,0,0,200,203,3,52,26,0,201,202,5,18,0,0,202,204,3,54,27,
0,203,201,1,0,0,0,203,204,1,0,0,0,204,205,1,0,0,0,205,206,5,41,0,0,206,211,
3,22,11,0,207,208,5,43,0,0,208,210,3,22,11,0,209,207,1,0,0,0,210,213,1,0,
0,0,211,209,1,0,0,0,211,212,1,0,0,0,212,214,1,0,0,0,213,211,1,0,0,0,214,
215,5,42,0,0,215,216,5,44,0,0,216,21,1,0,0,0,217,218,3,52,26,0,218,219,3,
52,26,0,219,23,1,0,0,0,220,221,5,30,0,0,221,222,3,26,13,0,222,25,1,0,0,0,
223,224,5,31,0,0,224,227,3,52,26,0,225,226,5,18,0,0,226,228,3,54,27,0,227,
225,1,0,0,0,227,228,1,0,0,0,228,229,1,0,0,0,229,230,5,41,0,0,230,235,3,28,
14,0,231,232,5,43,0,0,232,234,3,28,14,0,233,231,1,0,0,0,234,237,1,0,0,0,
235,233,1,0,0,0,235,236,1,0,0,0,236,238,1,0,0,0,237,235,1,0,0,0,238,239,
5,42,0,0,239,240,5,44,0,0,240,27,1,0,0,0,241,243,3,52,26,0,242,244,5,28,
0,0,243,242,1,0,0,0,243,244,1,0,0,0,244,246,1,0,0,0,245,247,5,29,0,0,246,
245,1,0,0,0,246,247,1,0,0,0,247,29,1,0,0,0,248,249,5,5,0,0,249,250,5,2,0,
0,250,251,3,52,26,0,251,252,5,44,0,0,252,31,1,0,0,0,253,254,5,6,0,0,254,
255,5,2,0,0,255,256,3,52,26,0,256,257,5,44,0,0,257,33,1,0,0,0,258,259,5,
32,0,0,259,260,5,33,0,0,260,261,5,41,0,0,261,266,3,36,18,0,262,263,5,43,
0,0,263,265,3,36,18,0,264,262,1,0,0,0,265,268,1,0,0,0,266,264,1,0,0,0,266,
267,1,0,0,0,267,269,1,0,0,0,268,266,1,0,0,0,269,270,5,42,0,0,270,271,5,44,
0,0,271,35,1,0,0,0,272,273,3,54,27,0,273,274,3,54,27,0,274,37,1,0,0,0,275,
278,3,40,20,0,276,278,3,42,21,0,277,275,1,0,0,0,277,276,1,0,0,0,278,39,1,
0,0,0,279,280,3,52,26,0,280,284,5,38,0,0,281,283,7,0,0,0,282,281,1,0,0,0,
283,286,1,0,0,0,284,282,1,0,0,0,284,285,1,0,0,0,285,41,1,0,0,0,286,284,1,
0,0,0,287,290,3,46,23,0,288,290,3,44,22,0,289,287,1,0,0,0,289,288,1,0,0,
0,290,43,1,0,0,0,291,292,3,52,26,0,292,293,3,52,26,0,293,294,5,8,0,0,294,
295,5,13,0,0,295,296,3,52,26,0,296,45,1,0,0,0,297,298,3,52,26,0,298,299,
3,52,26,0,299,300,5,8,0,0,300,301,5,41,0,0,301,302,3,48,24,0,302,303,5,43,
0,0,303,304,3,48,24,0,304,306,5,42,0,0,305,307,5,12,0,0,306,305,1,0,0,0,
306,307,1,0,0,0,307,47,1,0,0,0,308,309,7,1,0,0,309,49,1,0,0,0,310,311,5,
46,0,0,311,51,1,0,0,0,312,313,5,50,0,0,313,53,1,0,0,0,314,315,5,51,0,0,315,
55,1,0,0,0,316,317,5,45,0,0,317,57,1,0,0,0,318,319,5,47,0,0,319,59,1,0,0,
0,33,63,69,75,91,103,110,123,128,149,152,155,158,161,164,167,170,173,176,
179,187,190,193,203,211,227,235,243,246,266,277,284,289,306];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GISGrammarParser extends antlr4.Parser {

    static grammarFileName = "GISGrammar.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'0..1'", "'1..1'", "'0..*'", "'1..*'", 
                            null, "'#'", "'.'", "'('", "')'", "','", "';'" ];
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
                             "ZERO_ONE_SYMBOL", "ONE_ONE_SYMBOL", "ZERO_MANY_SYMBOL", 
                             "ONE_MANY_SYMBOL", "TYPE", "POUND_SYMBOL", 
                             "DOT_SYMBOL", "OPAR_SYMBOL", "CPAR_SYMBOL", 
                             "COMMA_SYMBOL", "SCOL_SYMBOL", "HEX_COLOR", 
                             "INT_NUMBER", "FLOAT_NUMBER", "COMMENT", "WHITESPACE", 
                             "IDENTIFIER", "QUOTED_TEXT" ];
    static ruleNames = [ "parse", "sentence", "createStatement", "createGIS", 
                         "createEntity", "createLayer", "createTileLayer", 
                         "createGeoJSONLayer", "sldCustomBody", "createWmsStyle", 
                         "createWmsLayer", "wmsSubLayer", "createSortableMap", 
                         "createMap", "mapLayer", "useGIS", "generateGIS", 
                         "setDeployment", "deploymentProperty", "property", 
                         "propertyDefinition", "relationshipDefinition", 
                         "mappedRelationshipDefinition", "ownedRelationshipDefinition", 
                         "cardinality", "srid", "identifier", "text", "hexColor", 
                         "floatNumber" ];

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
	        this.state = 61; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 60;
	            this.sentence();
	            this.state = 63; 
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
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.createStatement();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.useGIS();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 67;
	            this.generateGIS();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 68;
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
	        this.state = 71;
	        this.match(GISGrammarParser.CREATE_SYMBOL);
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 72;
	            this.createGIS();
	            break;
	        case 3:
	            this.state = 73;
	            this.createEntity();
	            break;
	        case 15:
	        case 16:
	        case 26:
	        case 30:
	        case 31:
	            this.state = 74;
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
	        this.state = 77;
	        this.match(GISGrammarParser.GIS_SYMBOL);
	        this.state = 78;
	        this.identifier();
	        this.state = 79;
	        this.match(GISGrammarParser.USING_SYMBOL);
	        this.state = 80;
	        this.srid();
	        this.state = 81;
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
	        this.state = 83;
	        this.match(GISGrammarParser.ENTITY_SYMBOL);
	        this.state = 84;
	        this.identifier();
	        this.state = 85;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 86;
	        this.property();
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===43) {
	            this.state = 87;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 88;
	            this.property();
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 94;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 95;
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
	        this.state = 103;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.createTileLayer();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.createGeoJSONLayer();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 99;
	            this.createWmsStyle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 100;
	            this.createWmsLayer();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 101;
	            this.createMap();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 102;
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
	        this.state = 105;
	        this.match(GISGrammarParser.TILE_SYMBOL);
	        this.state = 106;
	        this.match(GISGrammarParser.LAYER_SYMBOL);
	        this.state = 107;
	        this.identifier();
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 108;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 109;
	            this.text();
	        }

	        this.state = 112;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 113;
	        this.match(GISGrammarParser.URL_SYMBOL);
	        this.state = 114;
	        this.text();
	        this.state = 115;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 116;
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
	        this.state = 118;
	        this.match(GISGrammarParser.GEOJSON_SYMBOL);
	        this.state = 119;
	        this.match(GISGrammarParser.LAYER_SYMBOL);
	        this.state = 120;
	        this.identifier();
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 121;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 122;
	            this.text();
	        }

	        this.state = 125;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 126;
	        this.identifier();
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 127;
	            this.match(GISGrammarParser.EDITABLE_SYMBOL);
	        }

	        this.state = 130;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 131;
	        this.match(GISGrammarParser.FILL_COLOR_SYMBOL);
	        this.state = 132;
	        this.hexColor();
	        this.state = 133;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 134;
	        this.match(GISGrammarParser.STROKE_COLOR_SYMBOL);
	        this.state = 135;
	        this.hexColor();
	        this.state = 136;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 137;
	        this.match(GISGrammarParser.FILL_OPACITY_SYMBOL);
	        this.state = 138;
	        this.floatNumber();
	        this.state = 139;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 140;
	        this.match(GISGrammarParser.STROKE_OPACITY_SYMBOL);
	        this.state = 141;
	        this.floatNumber();
	        this.state = 142;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 143;
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
	        this.state = 145;
	        this.match(GISGrammarParser.GEOMETRY_TYPE_SYMBOL);
	        this.state = 146;
	        this.match(GISGrammarParser.TYPE);
	        this.state = 147;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 148;
	            this.match(GISGrammarParser.FILL_COLOR_SYMBOL);
	        }

	        this.state = 152;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 151;
	            this.hexColor();

	        }
	        this.state = 155;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 154;
	            this.match(GISGrammarParser.COMMA_SYMBOL);

	        }
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 157;
	            this.match(GISGrammarParser.STROKE_COLOR_SYMBOL);
	        }

	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 160;
	            this.hexColor();
	        }

	        this.state = 164;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 163;
	            this.match(GISGrammarParser.COMMA_SYMBOL);

	        }
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 166;
	            this.match(GISGrammarParser.FILL_OPACITY_SYMBOL);
	        }

	        this.state = 170;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 169;
	            this.floatNumber();

	        }
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 172;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	        }

	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 175;
	            this.match(GISGrammarParser.STROKE_OPACITY_SYMBOL);
	        }

	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===47) {
	            this.state = 178;
	            this.floatNumber();
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
	        this.state = 181;
	        this.match(GISGrammarParser.WMS_SYMBOL);
	        this.state = 182;
	        this.match(GISGrammarParser.STYLE_SYMBOL);
	        this.state = 183;
	        this.identifier();
	        this.state = 184;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 185;
	            this.match(GISGrammarParser.SLD_SYMBOL);
	            this.state = 186;
	            this.text();
	        }

	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 189;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	        }

	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 192;
	            this.sldCustomBody();
	        }

	        this.state = 195;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 196;
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
	        this.state = 198;
	        this.match(GISGrammarParser.WMS_SYMBOL);
	        this.state = 199;
	        this.match(GISGrammarParser.LAYER_SYMBOL);
	        this.state = 200;
	        this.identifier();
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 201;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 202;
	            this.text();
	        }

	        this.state = 205;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 206;
	        this.wmsSubLayer();
	        this.state = 211;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===43) {
	            this.state = 207;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 208;
	            this.wmsSubLayer();
	            this.state = 213;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 214;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 215;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.identifier();
	        this.state = 218;
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



	createSortableMap() {
	    let localctx = new CreateSortableMapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, GISGrammarParser.RULE_createSortableMap);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(GISGrammarParser.SORTABLE_SYMBOL);
	        this.state = 221;
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
	    this.enterRule(localctx, 26, GISGrammarParser.RULE_createMap);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(GISGrammarParser.MAP_SYMBOL);
	        this.state = 224;
	        this.identifier();
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 225;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 226;
	            this.text();
	        }

	        this.state = 229;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 230;
	        this.mapLayer();
	        this.state = 235;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===43) {
	            this.state = 231;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 232;
	            this.mapLayer();
	            this.state = 237;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 238;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 239;
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
	    this.enterRule(localctx, 28, GISGrammarParser.RULE_mapLayer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.identifier();
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 242;
	            this.match(GISGrammarParser.IS_BASE_LAYER_SYMBOL);
	        }

	        this.state = 246;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 245;
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
	    this.enterRule(localctx, 30, GISGrammarParser.RULE_useGIS);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(GISGrammarParser.USE_SYMBOL);
	        this.state = 249;
	        this.match(GISGrammarParser.GIS_SYMBOL);
	        this.state = 250;
	        this.identifier();
	        this.state = 251;
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
	    this.enterRule(localctx, 32, GISGrammarParser.RULE_generateGIS);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(GISGrammarParser.GENERATE_SYMBOL);
	        this.state = 254;
	        this.match(GISGrammarParser.GIS_SYMBOL);
	        this.state = 255;
	        this.identifier();
	        this.state = 256;
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
	    this.enterRule(localctx, 34, GISGrammarParser.RULE_setDeployment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(GISGrammarParser.SET_SYMBOL);
	        this.state = 259;
	        this.match(GISGrammarParser.DEPLOYMENT_SYMBOL);
	        this.state = 260;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 261;
	        this.deploymentProperty();
	        this.state = 266;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===43) {
	            this.state = 262;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 263;
	            this.deploymentProperty();
	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 269;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 270;
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
	    this.enterRule(localctx, 36, GISGrammarParser.RULE_deploymentProperty);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.text();
	        this.state = 273;
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
	    this.enterRule(localctx, 38, GISGrammarParser.RULE_property);
	    try {
	        this.state = 277;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 275;
	            this.propertyDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 276;
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
	    this.enterRule(localctx, 40, GISGrammarParser.RULE_propertyDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.identifier();
	        this.state = 280;
	        this.match(GISGrammarParser.TYPE);
	        this.state = 284;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3712) !== 0)) {
	            this.state = 281;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3712) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 286;
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
	    this.enterRule(localctx, 42, GISGrammarParser.RULE_relationshipDefinition);
	    try {
	        this.state = 289;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 287;
	            this.ownedRelationshipDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 288;
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
	    this.enterRule(localctx, 44, GISGrammarParser.RULE_mappedRelationshipDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 291;
	        this.identifier();
	        this.state = 292;
	        this.identifier();
	        this.state = 293;
	        this.match(GISGrammarParser.RELATIONSHIP_SYMBOL);
	        this.state = 294;
	        this.match(GISGrammarParser.MAPPEDBY_SYMBOL);
	        this.state = 295;
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
	    this.enterRule(localctx, 46, GISGrammarParser.RULE_ownedRelationshipDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 297;
	        this.identifier();
	        this.state = 298;
	        this.identifier();
	        this.state = 299;
	        this.match(GISGrammarParser.RELATIONSHIP_SYMBOL);
	        this.state = 300;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 301;
	        this.cardinality();
	        this.state = 302;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 303;
	        this.cardinality();
	        this.state = 304;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 306;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 305;
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
	    this.enterRule(localctx, 48, GISGrammarParser.RULE_cardinality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        _la = this._input.LA(1);
	        if(!(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 15) !== 0))) {
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
	    this.enterRule(localctx, 50, GISGrammarParser.RULE_srid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
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
	    this.enterRule(localctx, 52, GISGrammarParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
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
	    this.enterRule(localctx, 54, GISGrammarParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
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
	    this.enterRule(localctx, 56, GISGrammarParser.RULE_hexColor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
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
	    this.enterRule(localctx, 58, GISGrammarParser.RULE_floatNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
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
GISGrammarParser.ZERO_ONE_SYMBOL = 34;
GISGrammarParser.ONE_ONE_SYMBOL = 35;
GISGrammarParser.ZERO_MANY_SYMBOL = 36;
GISGrammarParser.ONE_MANY_SYMBOL = 37;
GISGrammarParser.TYPE = 38;
GISGrammarParser.POUND_SYMBOL = 39;
GISGrammarParser.DOT_SYMBOL = 40;
GISGrammarParser.OPAR_SYMBOL = 41;
GISGrammarParser.CPAR_SYMBOL = 42;
GISGrammarParser.COMMA_SYMBOL = 43;
GISGrammarParser.SCOL_SYMBOL = 44;
GISGrammarParser.HEX_COLOR = 45;
GISGrammarParser.INT_NUMBER = 46;
GISGrammarParser.FLOAT_NUMBER = 47;
GISGrammarParser.COMMENT = 48;
GISGrammarParser.WHITESPACE = 49;
GISGrammarParser.IDENTIFIER = 50;
GISGrammarParser.QUOTED_TEXT = 51;

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
GISGrammarParser.RULE_createSortableMap = 12;
GISGrammarParser.RULE_createMap = 13;
GISGrammarParser.RULE_mapLayer = 14;
GISGrammarParser.RULE_useGIS = 15;
GISGrammarParser.RULE_generateGIS = 16;
GISGrammarParser.RULE_setDeployment = 17;
GISGrammarParser.RULE_deploymentProperty = 18;
GISGrammarParser.RULE_property = 19;
GISGrammarParser.RULE_propertyDefinition = 20;
GISGrammarParser.RULE_relationshipDefinition = 21;
GISGrammarParser.RULE_mappedRelationshipDefinition = 22;
GISGrammarParser.RULE_ownedRelationshipDefinition = 23;
GISGrammarParser.RULE_cardinality = 24;
GISGrammarParser.RULE_srid = 25;
GISGrammarParser.RULE_identifier = 26;
GISGrammarParser.RULE_text = 27;
GISGrammarParser.RULE_hexColor = 28;
GISGrammarParser.RULE_floatNumber = 29;

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
