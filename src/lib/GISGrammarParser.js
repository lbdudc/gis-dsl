// Generated from grammar/GISGrammar.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import GISGrammarListener from './GISGrammarListener.js';
import GISGrammarVisitor from './GISGrammarVisitor.js';

const serializedATN = [4,1,50,275,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,1,0,4,0,60,8,0,11,0,12,0,61,1,1,1,1,1,1,1,1,3,1,68,8,1,1,
2,1,2,1,2,1,2,3,2,74,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,
5,4,88,8,4,10,4,12,4,91,9,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,102,
8,5,1,6,1,6,1,6,1,6,1,6,3,6,109,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,
1,7,1,7,3,7,122,8,7,1,7,1,7,1,7,3,7,127,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,
1,9,1,9,1,9,1,9,3,9,158,8,9,1,9,1,9,1,9,1,9,5,9,164,8,9,10,9,12,9,167,9,
9,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,12,3,12,182,
8,12,1,12,1,12,1,12,1,12,5,12,188,8,12,10,12,12,12,191,9,12,1,12,1,12,1,
12,1,13,1,13,3,13,198,8,13,1,13,3,13,201,8,13,1,14,1,14,1,14,1,14,1,14,1,
15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,5,16,219,8,16,10,16,
12,16,222,9,16,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,3,18,232,8,18,1,19,
1,19,1,19,5,19,237,8,19,10,19,12,19,240,9,19,1,20,1,20,3,20,244,8,20,1,21,
1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,
22,261,8,22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,
1,28,0,0,29,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
44,46,48,50,52,54,56,0,2,2,0,7,7,9,11,1,0,33,36,271,0,59,1,0,0,0,2,67,1,
0,0,0,4,69,1,0,0,0,6,75,1,0,0,0,8,81,1,0,0,0,10,101,1,0,0,0,12,103,1,0,0,
0,14,116,1,0,0,0,16,143,1,0,0,0,18,152,1,0,0,0,20,171,1,0,0,0,22,174,1,0,
0,0,24,177,1,0,0,0,26,195,1,0,0,0,28,202,1,0,0,0,30,207,1,0,0,0,32,212,1,
0,0,0,34,226,1,0,0,0,36,231,1,0,0,0,38,233,1,0,0,0,40,243,1,0,0,0,42,245,
1,0,0,0,44,251,1,0,0,0,46,262,1,0,0,0,48,264,1,0,0,0,50,266,1,0,0,0,52,268,
1,0,0,0,54,270,1,0,0,0,56,272,1,0,0,0,58,60,3,2,1,0,59,58,1,0,0,0,60,61,
1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,1,1,0,0,0,63,68,3,4,2,0,64,68,3,28,
14,0,65,68,3,30,15,0,66,68,3,32,16,0,67,63,1,0,0,0,67,64,1,0,0,0,67,65,1,
0,0,0,67,66,1,0,0,0,68,3,1,0,0,0,69,73,5,1,0,0,70,74,3,6,3,0,71,74,3,8,4,
0,72,74,3,10,5,0,73,70,1,0,0,0,73,71,1,0,0,0,73,72,1,0,0,0,74,5,1,0,0,0,
75,76,5,2,0,0,76,77,3,50,25,0,77,78,5,4,0,0,78,79,3,48,24,0,79,80,5,43,0,
0,80,7,1,0,0,0,81,82,5,3,0,0,82,83,3,50,25,0,83,84,5,40,0,0,84,89,3,36,18,
0,85,86,5,42,0,0,86,88,3,36,18,0,87,85,1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,
0,89,90,1,0,0,0,90,92,1,0,0,0,91,89,1,0,0,0,92,93,5,41,0,0,93,94,5,43,0,
0,94,9,1,0,0,0,95,102,3,12,6,0,96,102,3,14,7,0,97,102,3,16,8,0,98,102,3,
18,9,0,99,102,3,24,12,0,100,102,3,22,11,0,101,95,1,0,0,0,101,96,1,0,0,0,
101,97,1,0,0,0,101,98,1,0,0,0,101,99,1,0,0,0,101,100,1,0,0,0,102,11,1,0,
0,0,103,104,5,15,0,0,104,105,5,14,0,0,105,108,3,50,25,0,106,107,5,17,0,0,
107,109,3,52,26,0,108,106,1,0,0,0,108,109,1,0,0,0,109,110,1,0,0,0,110,111,
5,40,0,0,111,112,5,18,0,0,112,113,3,52,26,0,113,114,5,41,0,0,114,115,5,43,
0,0,115,13,1,0,0,0,116,117,5,16,0,0,117,118,5,14,0,0,118,121,3,50,25,0,119,
120,5,17,0,0,120,122,3,52,26,0,121,119,1,0,0,0,121,122,1,0,0,0,122,123,1,
0,0,0,123,124,5,40,0,0,124,126,3,50,25,0,125,127,5,20,0,0,126,125,1,0,0,
0,126,127,1,0,0,0,127,128,1,0,0,0,128,129,5,42,0,0,129,130,5,21,0,0,130,
131,3,54,27,0,131,132,5,42,0,0,132,133,5,22,0,0,133,134,3,54,27,0,134,135,
5,42,0,0,135,136,5,23,0,0,136,137,3,56,28,0,137,138,5,42,0,0,138,139,5,24,
0,0,139,140,3,56,28,0,140,141,5,41,0,0,141,142,5,43,0,0,142,15,1,0,0,0,143,
144,5,25,0,0,144,145,5,26,0,0,145,146,3,50,25,0,146,147,5,40,0,0,147,148,
5,19,0,0,148,149,3,52,26,0,149,150,5,41,0,0,150,151,5,43,0,0,151,17,1,0,
0,0,152,153,5,25,0,0,153,154,5,14,0,0,154,157,3,50,25,0,155,156,5,17,0,0,
156,158,3,52,26,0,157,155,1,0,0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,160,
5,40,0,0,160,165,3,20,10,0,161,162,5,42,0,0,162,164,3,20,10,0,163,161,1,
0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,168,1,0,0,0,167,
165,1,0,0,0,168,169,5,41,0,0,169,170,5,43,0,0,170,19,1,0,0,0,171,172,3,50,
25,0,172,173,3,50,25,0,173,21,1,0,0,0,174,175,5,29,0,0,175,176,3,24,12,0,
176,23,1,0,0,0,177,178,5,30,0,0,178,181,3,50,25,0,179,180,5,17,0,0,180,182,
3,52,26,0,181,179,1,0,0,0,181,182,1,0,0,0,182,183,1,0,0,0,183,184,5,40,0,
0,184,189,3,26,13,0,185,186,5,42,0,0,186,188,3,26,13,0,187,185,1,0,0,0,188,
191,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,192,1,0,0,0,191,189,1,0,
0,0,192,193,5,41,0,0,193,194,5,43,0,0,194,25,1,0,0,0,195,197,3,50,25,0,196,
198,5,27,0,0,197,196,1,0,0,0,197,198,1,0,0,0,198,200,1,0,0,0,199,201,5,28,
0,0,200,199,1,0,0,0,200,201,1,0,0,0,201,27,1,0,0,0,202,203,5,5,0,0,203,204,
5,2,0,0,204,205,3,50,25,0,205,206,5,43,0,0,206,29,1,0,0,0,207,208,5,6,0,
0,208,209,5,2,0,0,209,210,3,50,25,0,210,211,5,43,0,0,211,31,1,0,0,0,212,
213,5,31,0,0,213,214,5,32,0,0,214,215,5,40,0,0,215,220,3,34,17,0,216,217,
5,42,0,0,217,219,3,34,17,0,218,216,1,0,0,0,219,222,1,0,0,0,220,218,1,0,0,
0,220,221,1,0,0,0,221,223,1,0,0,0,222,220,1,0,0,0,223,224,5,41,0,0,224,225,
5,43,0,0,225,33,1,0,0,0,226,227,3,52,26,0,227,228,3,52,26,0,228,35,1,0,0,
0,229,232,3,38,19,0,230,232,3,40,20,0,231,229,1,0,0,0,231,230,1,0,0,0,232,
37,1,0,0,0,233,234,3,50,25,0,234,238,5,37,0,0,235,237,7,0,0,0,236,235,1,
0,0,0,237,240,1,0,0,0,238,236,1,0,0,0,238,239,1,0,0,0,239,39,1,0,0,0,240,
238,1,0,0,0,241,244,3,44,22,0,242,244,3,42,21,0,243,241,1,0,0,0,243,242,
1,0,0,0,244,41,1,0,0,0,245,246,3,50,25,0,246,247,3,50,25,0,247,248,5,8,0,
0,248,249,5,13,0,0,249,250,3,50,25,0,250,43,1,0,0,0,251,252,3,50,25,0,252,
253,3,50,25,0,253,254,5,8,0,0,254,255,5,40,0,0,255,256,3,46,23,0,256,257,
5,42,0,0,257,258,3,46,23,0,258,260,5,41,0,0,259,261,5,12,0,0,260,259,1,0,
0,0,260,261,1,0,0,0,261,45,1,0,0,0,262,263,7,1,0,0,263,47,1,0,0,0,264,265,
5,45,0,0,265,49,1,0,0,0,266,267,5,49,0,0,267,51,1,0,0,0,268,269,5,50,0,0,
269,53,1,0,0,0,270,271,5,44,0,0,271,55,1,0,0,0,272,273,5,46,0,0,273,57,1,
0,0,0,19,61,67,73,89,101,108,121,126,157,165,181,189,197,200,220,231,238,
243,260];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GISGrammarParser extends antlr4.Parser {

    static grammarFileName = "GISGrammar.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'0..1'", "'1..1'", "'0..*'", "'1..*'", 
                            null, "'#'", "'.'", "'('", "')'", "','", "';'" ];
    static symbolicNames = [ null, "CREATE_SYMBOL", "GIS_SYMBOL", "ENTITY_SYMBOL", 
                             "USING_SYMBOL", "USE_SYMBOL", "GENERATE_SYMBOL", 
                             "IDENTIFIER_SYMBOL", "RELATIONSHIP_SYMBOL", 
                             "DISPLAYSTRING_SYMBOL", "REQUIRED_SYMBOL", 
                             "UNIQUE_SYMBOL", "BIDIRECTIONAL_SYMBOL", "MAPPEDBY_SYMBOL", 
                             "LAYER_SYMBOL", "TILE_SYMBOL", "GEOJSON_SYMBOL", 
                             "AS_SYMBOL", "URL_SYMBOL", "SLD_SYMBOL", "EDITABLE_SYMBOL", 
                             "FILL_COLOR_SYMBOL", "STROKE_COLOR_SYMBOL", 
                             "FILL_OPACITY_SYMBOL", "STROKE_OPACITY_SYMBOL", 
                             "WMS_SYMBOL", "STYLE_SYMBOL", "IS_BASE_LAYER_SYMBOL", 
                             "HIDDEN_SYMBOL", "SORTABLE_SYMBOL", "MAP_SYMBOL", 
                             "SET_SYMBOL", "DEPLOYMENT_SYMBOL", "ZERO_ONE_SYMBOL", 
                             "ONE_ONE_SYMBOL", "ZERO_MANY_SYMBOL", "ONE_MANY_SYMBOL", 
                             "TYPE", "POUND_SYMBOL", "DOT_SYMBOL", "OPAR_SYMBOL", 
                             "CPAR_SYMBOL", "COMMA_SYMBOL", "SCOL_SYMBOL", 
                             "HEX_COLOR", "INT_NUMBER", "FLOAT_NUMBER", 
                             "COMMENT", "WHITESPACE", "IDENTIFIER", "QUOTED_TEXT" ];
    static ruleNames = [ "parse", "sentence", "createStatement", "createGIS", 
                         "createEntity", "createLayer", "createTileLayer", 
                         "createGeoJSONLayer", "createWmsStyle", "createWmsLayer", 
                         "wmsSubLayer", "createSortableMap", "createMap", 
                         "mapLayer", "useGIS", "generateGIS", "setDeployment", 
                         "deploymentProperty", "property", "propertyDefinition", 
                         "relationshipDefinition", "mappedRelationshipDefinition", 
                         "ownedRelationshipDefinition", "cardinality", "srid", 
                         "identifier", "text", "hexColor", "floatNumber" ];

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
	        this.state = 59; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 58;
	            this.sentence();
	            this.state = 61; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147483746) !== 0));
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
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63;
	            this.createStatement();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.useGIS();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 65;
	            this.generateGIS();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 66;
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
	        this.state = 69;
	        this.match(GISGrammarParser.CREATE_SYMBOL);
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 70;
	            this.createGIS();
	            break;
	        case 3:
	            this.state = 71;
	            this.createEntity();
	            break;
	        case 15:
	        case 16:
	        case 25:
	        case 29:
	        case 30:
	            this.state = 72;
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
	        this.state = 75;
	        this.match(GISGrammarParser.GIS_SYMBOL);
	        this.state = 76;
	        this.identifier();
	        this.state = 77;
	        this.match(GISGrammarParser.USING_SYMBOL);
	        this.state = 78;
	        this.srid();
	        this.state = 79;
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
	        this.state = 81;
	        this.match(GISGrammarParser.ENTITY_SYMBOL);
	        this.state = 82;
	        this.identifier();
	        this.state = 83;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 84;
	        this.property();
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 85;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 86;
	            this.property();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 92;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 93;
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
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.createTileLayer();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.createGeoJSONLayer();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.createWmsStyle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 98;
	            this.createWmsLayer();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 99;
	            this.createMap();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 100;
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
	        this.state = 103;
	        this.match(GISGrammarParser.TILE_SYMBOL);
	        this.state = 104;
	        this.match(GISGrammarParser.LAYER_SYMBOL);
	        this.state = 105;
	        this.identifier();
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 106;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 107;
	            this.text();
	        }

	        this.state = 110;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 111;
	        this.match(GISGrammarParser.URL_SYMBOL);
	        this.state = 112;
	        this.text();
	        this.state = 113;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 114;
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
	        this.state = 116;
	        this.match(GISGrammarParser.GEOJSON_SYMBOL);
	        this.state = 117;
	        this.match(GISGrammarParser.LAYER_SYMBOL);
	        this.state = 118;
	        this.identifier();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 119;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 120;
	            this.text();
	        }

	        this.state = 123;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 124;
	        this.identifier();
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 125;
	            this.match(GISGrammarParser.EDITABLE_SYMBOL);
	        }

	        this.state = 128;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 129;
	        this.match(GISGrammarParser.FILL_COLOR_SYMBOL);
	        this.state = 130;
	        this.hexColor();
	        this.state = 131;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 132;
	        this.match(GISGrammarParser.STROKE_COLOR_SYMBOL);
	        this.state = 133;
	        this.hexColor();
	        this.state = 134;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 135;
	        this.match(GISGrammarParser.FILL_OPACITY_SYMBOL);
	        this.state = 136;
	        this.floatNumber();
	        this.state = 137;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 138;
	        this.match(GISGrammarParser.STROKE_OPACITY_SYMBOL);
	        this.state = 139;
	        this.floatNumber();
	        this.state = 140;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 141;
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



	createWmsStyle() {
	    let localctx = new CreateWmsStyleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, GISGrammarParser.RULE_createWmsStyle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(GISGrammarParser.WMS_SYMBOL);
	        this.state = 144;
	        this.match(GISGrammarParser.STYLE_SYMBOL);
	        this.state = 145;
	        this.identifier();
	        this.state = 146;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 147;
	        this.match(GISGrammarParser.SLD_SYMBOL);
	        this.state = 148;
	        this.text();
	        this.state = 149;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 150;
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
	    this.enterRule(localctx, 18, GISGrammarParser.RULE_createWmsLayer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(GISGrammarParser.WMS_SYMBOL);
	        this.state = 153;
	        this.match(GISGrammarParser.LAYER_SYMBOL);
	        this.state = 154;
	        this.identifier();
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 155;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 156;
	            this.text();
	        }

	        this.state = 159;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 160;
	        this.wmsSubLayer();
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 161;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 162;
	            this.wmsSubLayer();
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 168;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 169;
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
	    this.enterRule(localctx, 20, GISGrammarParser.RULE_wmsSubLayer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.identifier();
	        this.state = 172;
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
	    this.enterRule(localctx, 22, GISGrammarParser.RULE_createSortableMap);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(GISGrammarParser.SORTABLE_SYMBOL);
	        this.state = 175;
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
	    this.enterRule(localctx, 24, GISGrammarParser.RULE_createMap);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(GISGrammarParser.MAP_SYMBOL);
	        this.state = 178;
	        this.identifier();
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 179;
	            this.match(GISGrammarParser.AS_SYMBOL);
	            this.state = 180;
	            this.text();
	        }

	        this.state = 183;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 184;
	        this.mapLayer();
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 185;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 186;
	            this.mapLayer();
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 192;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 193;
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
	    this.enterRule(localctx, 26, GISGrammarParser.RULE_mapLayer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.identifier();
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 196;
	            this.match(GISGrammarParser.IS_BASE_LAYER_SYMBOL);
	        }

	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 199;
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
	    this.enterRule(localctx, 28, GISGrammarParser.RULE_useGIS);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(GISGrammarParser.USE_SYMBOL);
	        this.state = 203;
	        this.match(GISGrammarParser.GIS_SYMBOL);
	        this.state = 204;
	        this.identifier();
	        this.state = 205;
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
	    this.enterRule(localctx, 30, GISGrammarParser.RULE_generateGIS);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(GISGrammarParser.GENERATE_SYMBOL);
	        this.state = 208;
	        this.match(GISGrammarParser.GIS_SYMBOL);
	        this.state = 209;
	        this.identifier();
	        this.state = 210;
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
	    this.enterRule(localctx, 32, GISGrammarParser.RULE_setDeployment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.match(GISGrammarParser.SET_SYMBOL);
	        this.state = 213;
	        this.match(GISGrammarParser.DEPLOYMENT_SYMBOL);
	        this.state = 214;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 215;
	        this.deploymentProperty();
	        this.state = 220;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===42) {
	            this.state = 216;
	            this.match(GISGrammarParser.COMMA_SYMBOL);
	            this.state = 217;
	            this.deploymentProperty();
	            this.state = 222;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 223;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 224;
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
	    this.enterRule(localctx, 34, GISGrammarParser.RULE_deploymentProperty);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.text();
	        this.state = 227;
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
	    this.enterRule(localctx, 36, GISGrammarParser.RULE_property);
	    try {
	        this.state = 231;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 229;
	            this.propertyDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 230;
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
	    this.enterRule(localctx, 38, GISGrammarParser.RULE_propertyDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.identifier();
	        this.state = 234;
	        this.match(GISGrammarParser.TYPE);
	        this.state = 238;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3712) !== 0)) {
	            this.state = 235;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3712) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 240;
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
	    this.enterRule(localctx, 40, GISGrammarParser.RULE_relationshipDefinition);
	    try {
	        this.state = 243;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 241;
	            this.ownedRelationshipDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 242;
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
	    this.enterRule(localctx, 42, GISGrammarParser.RULE_mappedRelationshipDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.identifier();
	        this.state = 246;
	        this.identifier();
	        this.state = 247;
	        this.match(GISGrammarParser.RELATIONSHIP_SYMBOL);
	        this.state = 248;
	        this.match(GISGrammarParser.MAPPEDBY_SYMBOL);
	        this.state = 249;
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
	    this.enterRule(localctx, 44, GISGrammarParser.RULE_ownedRelationshipDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this.identifier();
	        this.state = 252;
	        this.identifier();
	        this.state = 253;
	        this.match(GISGrammarParser.RELATIONSHIP_SYMBOL);
	        this.state = 254;
	        this.match(GISGrammarParser.OPAR_SYMBOL);
	        this.state = 255;
	        this.cardinality();
	        this.state = 256;
	        this.match(GISGrammarParser.COMMA_SYMBOL);
	        this.state = 257;
	        this.cardinality();
	        this.state = 258;
	        this.match(GISGrammarParser.CPAR_SYMBOL);
	        this.state = 260;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 259;
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
	    this.enterRule(localctx, 46, GISGrammarParser.RULE_cardinality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        _la = this._input.LA(1);
	        if(!(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 15) !== 0))) {
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
	    this.enterRule(localctx, 48, GISGrammarParser.RULE_srid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
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
	    this.enterRule(localctx, 50, GISGrammarParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
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
	    this.enterRule(localctx, 52, GISGrammarParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
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
	    this.enterRule(localctx, 54, GISGrammarParser.RULE_hexColor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
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
	    this.enterRule(localctx, 56, GISGrammarParser.RULE_floatNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
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
GISGrammarParser.AS_SYMBOL = 17;
GISGrammarParser.URL_SYMBOL = 18;
GISGrammarParser.SLD_SYMBOL = 19;
GISGrammarParser.EDITABLE_SYMBOL = 20;
GISGrammarParser.FILL_COLOR_SYMBOL = 21;
GISGrammarParser.STROKE_COLOR_SYMBOL = 22;
GISGrammarParser.FILL_OPACITY_SYMBOL = 23;
GISGrammarParser.STROKE_OPACITY_SYMBOL = 24;
GISGrammarParser.WMS_SYMBOL = 25;
GISGrammarParser.STYLE_SYMBOL = 26;
GISGrammarParser.IS_BASE_LAYER_SYMBOL = 27;
GISGrammarParser.HIDDEN_SYMBOL = 28;
GISGrammarParser.SORTABLE_SYMBOL = 29;
GISGrammarParser.MAP_SYMBOL = 30;
GISGrammarParser.SET_SYMBOL = 31;
GISGrammarParser.DEPLOYMENT_SYMBOL = 32;
GISGrammarParser.ZERO_ONE_SYMBOL = 33;
GISGrammarParser.ONE_ONE_SYMBOL = 34;
GISGrammarParser.ZERO_MANY_SYMBOL = 35;
GISGrammarParser.ONE_MANY_SYMBOL = 36;
GISGrammarParser.TYPE = 37;
GISGrammarParser.POUND_SYMBOL = 38;
GISGrammarParser.DOT_SYMBOL = 39;
GISGrammarParser.OPAR_SYMBOL = 40;
GISGrammarParser.CPAR_SYMBOL = 41;
GISGrammarParser.COMMA_SYMBOL = 42;
GISGrammarParser.SCOL_SYMBOL = 43;
GISGrammarParser.HEX_COLOR = 44;
GISGrammarParser.INT_NUMBER = 45;
GISGrammarParser.FLOAT_NUMBER = 46;
GISGrammarParser.COMMENT = 47;
GISGrammarParser.WHITESPACE = 48;
GISGrammarParser.IDENTIFIER = 49;
GISGrammarParser.QUOTED_TEXT = 50;

GISGrammarParser.RULE_parse = 0;
GISGrammarParser.RULE_sentence = 1;
GISGrammarParser.RULE_createStatement = 2;
GISGrammarParser.RULE_createGIS = 3;
GISGrammarParser.RULE_createEntity = 4;
GISGrammarParser.RULE_createLayer = 5;
GISGrammarParser.RULE_createTileLayer = 6;
GISGrammarParser.RULE_createGeoJSONLayer = 7;
GISGrammarParser.RULE_createWmsStyle = 8;
GISGrammarParser.RULE_createWmsLayer = 9;
GISGrammarParser.RULE_wmsSubLayer = 10;
GISGrammarParser.RULE_createSortableMap = 11;
GISGrammarParser.RULE_createMap = 12;
GISGrammarParser.RULE_mapLayer = 13;
GISGrammarParser.RULE_useGIS = 14;
GISGrammarParser.RULE_generateGIS = 15;
GISGrammarParser.RULE_setDeployment = 16;
GISGrammarParser.RULE_deploymentProperty = 17;
GISGrammarParser.RULE_property = 18;
GISGrammarParser.RULE_propertyDefinition = 19;
GISGrammarParser.RULE_relationshipDefinition = 20;
GISGrammarParser.RULE_mappedRelationshipDefinition = 21;
GISGrammarParser.RULE_ownedRelationshipDefinition = 22;
GISGrammarParser.RULE_cardinality = 23;
GISGrammarParser.RULE_srid = 24;
GISGrammarParser.RULE_identifier = 25;
GISGrammarParser.RULE_text = 26;
GISGrammarParser.RULE_hexColor = 27;
GISGrammarParser.RULE_floatNumber = 28;

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

	SLD_SYMBOL() {
	    return this.getToken(GISGrammarParser.SLD_SYMBOL, 0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	CPAR_SYMBOL() {
	    return this.getToken(GISGrammarParser.CPAR_SYMBOL, 0);
	};

	SCOL_SYMBOL() {
	    return this.getToken(GISGrammarParser.SCOL_SYMBOL, 0);
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
