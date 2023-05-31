function transformation(spec) {
  _relationships(spec);
  const newSpec = {
    features: [
      "GIS_SPL",
      "DataManagement",
      "DM_DataServer",
      "DM_SD_PostGIS",
      "DM_SpatialDatabase",
      "GraphicalUserInterface",
      "GUI_F_Creatable",
      "GUI_F_Editable",
      "GUI_F_Removable",
      "GUI_Forms",
      "GUI_L_FormLink",
      "GUI_Lists",
      "GUI_M_Top",
      "GUI_Menu",
      "GUI_StaticPages",
      "MapViewer",
      "MV_CI_CenterCoordinates",
      "MV_CI_Dimensions",
      "MV_CI_Map",
      "MV_CI_Scale",
      "MV_ContextInformation",
      "MV_DetailOnClick",
      "MV_GeoJSON",
      "MV_LayerManagement",
      "MV_LM_CenterViewOnLayer",
      "MV_LM_ExternalLayer",
      "MV_LM_HideLayer",
      "MV_LM_Opacity",
      "MV_LM_Order",
      "MV_LM_Style",
      "MV_MapCenter",
      "MV_MapServer",
      "MV_MC_BBox",
      "MV_MS_GeoServer",
      "MV_T_E_F_PDF",
      "MV_T_E_F_URL",
      "MV_T_E_SetScale",
      "MV_T_E_Type",
      "MV_T_Export",
      "MV_T_InformationMode",
      "MV_T_M_Distance",
      "MV_T_M_Line",
      "MV_T_M_Polygon",
      "MV_T_Measure",
      "MV_T_Pan",
      "MV_T_Zoom",
      "MV_T_ZoomWindow",
      "MV_Tools",
      "T_GIS",
      "Tools",
    ],
    data: {
      basicData: {
        name: spec.name,
      },
      dataModel: {
        entities: spec.entities,
      },
      maps: spec.maps,
    },
  };

  return newSpec;
}

function _relationships(spec) {
  let source, target;

  spec.relationships.forEach((r) => {
    source = spec.getEntity(r.source);
    target = spec.getEntity(r.target);
    let sourceOwner = false;
    let targetOwner = false;
    let sourceMultiple = _multiple(r.sourceOpts.multiplicity);
    let targetMultiple = _multiple(r.targetOpts.multiplicity);
    if (sourceMultiple && !targetMultiple) {
      targetOwner = true;
    } else {
      sourceOwner = true;
    }

    source.properties.push({
      name: r.sourceOpts.label,
      class: target.name,
      owner: sourceOwner,
      bidirectional: r.targetOpts.label,
      multiple: sourceMultiple,
      required: _required(r.sourceOpts.multiplicity),
    });

    target.properties.push({
      name: r.targetOpts.label,
      class: source.name,
      owner: targetOwner,
      bidirectional: r.sourceOpts.label,
      multiple: targetMultiple,
      required: _required(r.targetOpts.multiplicity),
    });
  });
}

function _multiple(multiplicity) {
  return ["1..1", "0..1"].find((a) => a == multiplicity) == null;
}

function _required(multiplicity) {
  return ["1..1", "1..*"].find((a) => a == multiplicity) != null;
}

function getPropertyParams(symbols) {
  if (!symbols.length) return null;

  const ret = {};
  if (symbols.includes("identifier")) {
    ret.pk = true;
  }
  if (symbols.includes("required")) {
    ret.required = true;
  }
  if (symbols.includes("unique")) {
    ret.unique = true;
  }
  if (symbols.includes("display_string")) {
    ret.displayString = true;
  }
  return ret;
}

export { transformation, getPropertyParams };
