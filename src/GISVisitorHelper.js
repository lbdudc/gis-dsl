import features from "./features.js";

function transformation(spec) {
  _relationships(spec);
  const newSpec = {
    features: features,
    basicData: {
      name: spec.name,
    },
    data: {
      dataModel: {
        entities: spec.entities,
        enums: [],
      },
    },
    mapViewer: {
      maps: spec.maps,
      layers: spec.layers,
      styles: spec.styles,
    },
  };

  if (spec.extra) {
    newSpec.basicData.extra = spec.extra;
  }

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
