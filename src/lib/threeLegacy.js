// The design was authored against three r128 (legacy light units, no colour management).
// This shim reproduces that look on the three version installed in the app.
import * as T from 'three';

T.ColorManagement.enabled = false;
const lit = (Base) => class extends Base { constructor(c, i, ...r) { super(c, (i ?? 1) * Math.PI, ...r); } };

class LegacyRenderer extends T.WebGLRenderer {
  constructor(o) { super(o); this.outputColorSpace = T.LinearSRGBColorSpace; }
}
class LegacyPointLight extends T.PointLight {
  constructor(c, i, d) { super(c, (i ?? 1) * Math.PI, d, 1); }
}

export default {
  ...T,
  WebGLRenderer: LegacyRenderer,
  AmbientLight: lit(T.AmbientLight),
  DirectionalLight: lit(T.DirectionalLight),
  PointLight: LegacyPointLight,
};
