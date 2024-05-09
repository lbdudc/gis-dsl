grammar GISGrammar;

parse
  : sentence+
;

sentence
  : createStatement
  | useGIS
  | generateGIS
  | setDeployment
;

createStatement:
  CREATE_SYMBOL (
    createGIS
    | createEntity
    | createLayer
  )
;

createGIS:
  GIS_SYMBOL identifier USING_SYMBOL srid SCOL_SYMBOL
;

createEntity:
  ENTITY_SYMBOL identifier OPAR_SYMBOL
	  property (COMMA_SYMBOL property)*
  CPAR_SYMBOL SCOL_SYMBOL
;

createLayer: createTileLayer | createGeoJSONLayer | createWmsStyle | createWmsLayer | createMap | createSortableMap;

createTileLayer: TILE_SYMBOL LAYER_SYMBOL identifier (AS_SYMBOL text)? OPAR_SYMBOL
    URL_SYMBOL text
  CPAR_SYMBOL SCOL_SYMBOL;

createGeoJSONLayer: GEOJSON_SYMBOL LAYER_SYMBOL identifier (AS_SYMBOL text)? OPAR_SYMBOL
    identifier (EDITABLE_SYMBOL)? COMMA_SYMBOL
    FILL_COLOR_SYMBOL hexColor COMMA_SYMBOL
    STROKE_COLOR_SYMBOL hexColor COMMA_SYMBOL
    FILL_OPACITY_SYMBOL floatNumber COMMA_SYMBOL
    STROKE_OPACITY_SYMBOL floatNumber
  CPAR_SYMBOL SCOL_SYMBOL;

sldCustomBody: GEOMETRY_TYPE_SYMBOL TYPE COMMA_SYMBOL
    FILL_COLOR_SYMBOL? hexColor? COMMA_SYMBOL?
    STROKE_COLOR_SYMBOL? hexColor? COMMA_SYMBOL?
    FILL_OPACITY_SYMBOL? (floatNumber | intNumber)? COMMA_SYMBOL?
    STROKE_OPACITY_SYMBOL? (floatNumber | intNumber)?;

createWmsStyle: WMS_SYMBOL STYLE_SYMBOL identifier OPAR_SYMBOL
    (SLD_SYMBOL text)? COMMA_SYMBOL?
    sldCustomBody?
  CPAR_SYMBOL SCOL_SYMBOL;

createWmsLayer: WMS_SYMBOL LAYER_SYMBOL identifier (AS_SYMBOL text)? OPAR_SYMBOL
    wmsSubLayer (COMMA_SYMBOL wmsSubLayer)*
  CPAR_SYMBOL SCOL_SYMBOL;

wmsSubLayer: identifier identifier;

createSortableMap: SORTABLE_SYMBOL createMap;

createMap: MAP_SYMBOL identifier (AS_SYMBOL text)? OPAR_SYMBOL
    mapLayer (COMMA_SYMBOL mapLayer)*
  CPAR_SYMBOL SCOL_SYMBOL;

mapLayer: identifier (IS_BASE_LAYER_SYMBOL)? (HIDDEN_SYMBOL)?;

useGIS: USE_SYMBOL GIS_SYMBOL identifier SCOL_SYMBOL;

generateGIS: GENERATE_SYMBOL GIS_SYMBOL identifier SCOL_SYMBOL;

setDeployment:
  SET_SYMBOL DEPLOYMENT_SYMBOL OPAR_SYMBOL
	  deploymentProperty (COMMA_SYMBOL deploymentProperty)*
  CPAR_SYMBOL SCOL_SYMBOL
;

deploymentProperty: text text;

property: propertyDefinition | relationshipDefinition;

propertyDefinition:
  identifier TYPE (
    IDENTIFIER_SYMBOL
    | DISPLAYSTRING_SYMBOL
    | REQUIRED_SYMBOL
    | UNIQUE_SYMBOL
  )*
;

relationshipDefinition:
	ownedRelationshipDefinition | mappedRelationshipDefinition;

mappedRelationshipDefinition:
  identifier identifier RELATIONSHIP_SYMBOL MAPPEDBY_SYMBOL identifier;

ownedRelationshipDefinition:
	identifier identifier RELATIONSHIP_SYMBOL OPAR_SYMBOL cardinality COMMA_SYMBOL cardinality
		CPAR_SYMBOL BIDIRECTIONAL_SYMBOL?;

cardinality:
  ZERO_ONE_SYMBOL
  | ONE_ONE_SYMBOL
  | ZERO_MANY_SYMBOL
  | ONE_MANY_SYMBOL
;
srid: INT_NUMBER;
identifier: IDENTIFIER;
text: QUOTED_TEXT;

hexColor: HEX_COLOR;
floatNumber: FLOAT_NUMBER;
intNumber: INT_NUMBER;


//-----------------------------------------------------------------------


fragment A: [aA];
fragment B: [bB];
fragment C: [cC];
fragment D: [dD];
fragment E: [eE];
fragment F: [fF];
fragment G: [gG];
fragment H: [hH];
fragment I: [iI];
fragment J: [jJ];
fragment K: [kK];
fragment L: [lL];
fragment M: [mM];
fragment N: [nN];
fragment O: [oO];
fragment P: [pP];
fragment Q: [qQ];
fragment R: [rR];
fragment S: [sS];
fragment T: [tT];
fragment U: [uU];
fragment V: [vV];
fragment W: [wW];
fragment X: [xX];
fragment Y: [yY];
fragment Z: [zZ];

fragment DIGIT:    [0-9];
fragment DIGITS:   DIGIT+;
fragment HEXDIGIT: [0-9a-fA-F];



fragment LETTER_WHEN_UNQUOTED_NO_DIGIT: [a-zA-Z_$\u0080-\uffff];
fragment LETTER_WHEN_UNQUOTED: DIGIT | LETTER_WHEN_UNQUOTED_NO_DIGIT;
// Any letter but without e/E and digits (which are used to match a decimal number).
fragment LETTER_WITHOUT_FLOAT_PART: [a-df-zA-DF-Z_$\u0080-\uffff];

fragment UNDERLINE_SYMBOL: '_';
fragment QUOTE_SYMBOL: '"';

CREATE_SYMBOL: C R E A T E;
GIS_SYMBOL: G I S;
ENTITY_SYMBOL: E N T I T Y;
USING_SYMBOL: U S I N G;
USE_SYMBOL: U S E;
GENERATE_SYMBOL: G E N E R A T E;
IDENTIFIER_SYMBOL: I D E N T I F I E R;
RELATIONSHIP_SYMBOL: R E L A T I O N S H I P;
DISPLAYSTRING_SYMBOL: D I S P L A Y UNDERLINE_SYMBOL S T R I N G;
REQUIRED_SYMBOL: R E Q U I R E D;
UNIQUE_SYMBOL: U N I Q U E;
BIDIRECTIONAL_SYMBOL: B I D I R E C T I O N A L;
MAPPEDBY_SYMBOL: M A P P E D UNDERLINE_SYMBOL B Y;
LAYER_SYMBOL: L A Y E R;
TILE_SYMBOL: T I L E;
GEOJSON_SYMBOL: G E O J S O N;
GEOMETRY_TYPE_SYMBOL: G E O M E T R Y T Y P E;
AS_SYMBOL: A S;
URL_SYMBOL: U R L;
SLD_SYMBOL: S T Y L E L A Y E R D E S C R I P T O R;
EDITABLE_SYMBOL: E D I T A B L E;
FILL_COLOR_SYMBOL: F I L L C O L O R;
STROKE_COLOR_SYMBOL: S T R O K E C O L O R;
FILL_OPACITY_SYMBOL: F I L L O P A C I T Y;
STROKE_OPACITY_SYMBOL: S T R O K E O P A C I T Y;
WMS_SYMBOL: W M S;
STYLE_SYMBOL: S T Y L E;
IS_BASE_LAYER_SYMBOL: I S UNDERLINE_SYMBOL B A S E UNDERLINE_SYMBOL L A Y E R;
HIDDEN_SYMBOL: H I D D E N;
SORTABLE_SYMBOL: S O R T A B L E;
MAP_SYMBOL: M A P;
SET_SYMBOL: S E T;
DEPLOYMENT_SYMBOL: D E P L O Y M E N T;

ZERO_ONE_SYMBOL: '0..1';
ONE_ONE_SYMBOL: '1..1';
ZERO_MANY_SYMBOL: '0..*';
ONE_MANY_SYMBOL: '1..*';

TYPE
  : L O N G
  | B O O L E A N
  | I N T E G E R
  | D O U B L E
  | L O C A L D A T E
  | S T R I N G
  | L I N E S T R I N G
  | L I N E
  | M U L T I L I N E S T R I N G
  | P O L Y G O N
  | M U L T I P O L Y G O N
  | P O I N T
  | M U L T I P O I N T
;

POUND_SYMBOL : '#';
DOT_SYMBOL   : '.';
OPAR_SYMBOL  : '(';
CPAR_SYMBOL  : ')';
COMMA_SYMBOL : ',';
SCOL_SYMBOL  : ';';

HEX_COLOR: POUND_SYMBOL HEXDIGIT HEXDIGIT HEXDIGIT HEXDIGIT HEXDIGIT HEXDIGIT;
INT_NUMBER: DIGITS;
FLOAT_NUMBER: (DIGITS? DOT_SYMBOL)? DIGITS;

COMMENT: '//' ~[\r\n]* -> skip;
//SPACE: [ \t]+ -> skip;
//EOFS: [\r\n] -> skip;
WHITESPACE: [ \t\f\r\n] -> channel(HIDDEN); // Ignore whitespaces.

IDENTIFIER:
    DIGITS+ [eE] (LETTER_WHEN_UNQUOTED_NO_DIGIT LETTER_WHEN_UNQUOTED*)? // Have to exclude float pattern, as this rule matches more.
    | DIGITS+ LETTER_WITHOUT_FLOAT_PART LETTER_WHEN_UNQUOTED*
    | LETTER_WHEN_UNQUOTED_NO_DIGIT LETTER_WHEN_UNQUOTED* // INT_NUMBER matches first if there are only digits.
;

QUOTED_TEXT: QUOTE_SYMBOL (~[\r\n"])* QUOTE_SYMBOL;
