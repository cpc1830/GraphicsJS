// This file was autogenerated by depswriter.py.
// Please do not edit.
goog.addDependency('../../../../src/acgraph.js', ['acgraph'], ['acgraph.compatibility', 'acgraph.vector', 'acgraph.vector.Circle', 'acgraph.vector.Clip', 'acgraph.vector.Ellipse', 'acgraph.vector.HatchFill', 'acgraph.vector.Image', 'acgraph.vector.Layer', 'acgraph.vector.Path', 'acgraph.vector.PatternFill', 'acgraph.vector.Rect', 'acgraph.vector.Renderer', 'acgraph.vector.Text', 'acgraph.vector.UnmanagedLayer', 'acgraph.vector.primitives', 'acgraph.vector.svg.Renderer', 'acgraph.vector.svg.Stage', 'acgraph.vector.vml.Clip', 'acgraph.vector.vml.Renderer', 'acgraph.vector.vml.Stage', 'acgraph.vector.vml.Text', 'goog.dom', 'goog.userAgent'], false);
goog.addDependency('../../../../src/compatibility.js', ['acgraph.compatibility'], [], false);
goog.addDependency('../../../../src/error/error.js', ['acgraph.error'], [], false);
goog.addDependency('../../../../src/events/BrowserEvent.js', ['acgraph.events.BrowserEvent'], ['goog.events.Event'], false);
goog.addDependency('../../../../src/events/Dragger.js', ['acgraph.events.DragEvent', 'acgraph.events.Dragger'], ['acgraph.math.Rect', 'goog.dom', 'goog.events', 'goog.events.Event', 'goog.events.EventHandler', 'goog.events.EventTarget', 'goog.events.EventType', 'goog.math.Coordinate', 'goog.math.Rect', 'goog.style', 'goog.userAgent'], false);
goog.addDependency('../../../../src/events/MouseWheelHandler.js', ['acgraph.events.MouseWheelHandler'], ['goog.events.MouseWheelHandler'], false);
goog.addDependency('../../../../src/events/events.js', ['acgraph.events', 'acgraph.events.EventType'], ['goog.events'], false);
goog.addDependency('../../../../src/math/Coordinate.js', ['acgraph.math.Coordinate'], ['goog.math.Coordinate'], false);
goog.addDependency('../../../../src/math/Rect.js', ['acgraph.math.Rect'], ['goog.math.Rect'], false);
goog.addDependency('../../../../src/math/Size.js', ['acgraph.math.Size'], ['goog.math.Size'], false);
goog.addDependency('../../../../src/math/math.js', ['acgraph.math'], ['acgraph.math.Rect', 'goog.math'], false);
goog.addDependency('../../../../src/utils/HTMLParser.js', ['acgraph.utils.HTMLParser'], ['goog.object'], false);
goog.addDependency('../../../../src/utils/HelperElement.js', ['acgraph.utils.HelperElement', 'acgraph.utils.HelperElement.EventType'], ['acgraph.events', 'goog.dom', 'goog.events.EventTarget', 'goog.net.IframeIo', 'goog.style', 'goog.userAgent'], false);
goog.addDependency('../../../../src/utils/IdGenerator.js', ['acgraph.utils.IdGenerator'], [], false);
goog.addDependency('../../../../src/utils/exporting.js', ['acgraph.utils.exporting'], ['goog.Timer', 'goog.dom', 'goog.style'], false);
goog.addDependency('../../../../src/utils/utils.js', ['acgraph.utils'], ['goog.userAgent'], false);
goog.addDependency('../../../../src/vector/Circle.js', ['acgraph.vector.Circle'], ['acgraph.utils.IdGenerator', 'acgraph.vector.Ellipse'], false);
goog.addDependency('../../../../src/vector/Clip.js', ['acgraph.vector.Clip'], ['acgraph.math.Rect', 'acgraph.vector.ILayer', 'goog.Disposable', 'goog.array'], false);
goog.addDependency('../../../../src/vector/Defs.js', ['acgraph.vector.Defs'], ['acgraph.math.Rect', 'acgraph.vector.HatchFill', 'acgraph.vector.LinearGradient', 'acgraph.vector.PatternFill', 'acgraph.vector.RadialGradient', 'goog.Disposable'], false);
goog.addDependency('../../../../src/vector/Element.js', ['acgraph.vector.Element', 'acgraph.vector.Element.DirtyState'], ['acgraph.error', 'acgraph.events', 'acgraph.events.Dragger', 'acgraph.math.Rect', 'acgraph.utils.IdGenerator', 'acgraph.vector', 'goog.events.EventTarget', 'goog.events.Listenable', 'goog.graphics.AffineTransform'], false);
goog.addDependency('../../../../src/vector/Ellipse.js', ['acgraph.vector.Ellipse'], ['acgraph.math.Coordinate', 'acgraph.math.Rect', 'acgraph.utils.IdGenerator', 'acgraph.vector.Shape'], false);
goog.addDependency('../../../../src/vector/HatchFill.js', ['acgraph.vector.HatchFill'], ['acgraph.math.Rect', 'acgraph.utils.IdGenerator', 'acgraph.vector.Path', 'acgraph.vector.PatternFill'], false);
goog.addDependency('../../../../src/vector/Image.js', ['acgraph.vector.Image'], ['acgraph.math.Rect', 'acgraph.utils.IdGenerator', 'acgraph.vector.Element'], false);
goog.addDependency('../../../../src/vector/Layer.js', ['acgraph.vector.Layer'], ['acgraph.error', 'acgraph.math.Rect', 'acgraph.utils.IdGenerator', 'acgraph.vector.Element', 'acgraph.vector.ILayer'], false);
goog.addDependency('../../../../src/vector/LinearGradient.js', ['acgraph.vector.LinearGradient'], ['acgraph.utils.IdGenerator', 'goog.Disposable'], false);
goog.addDependency('../../../../src/vector/Path.js', ['acgraph.vector.Path'], ['acgraph.vector.PathBase'], false);
goog.addDependency('../../../../src/vector/PathBase.js', ['acgraph.vector.PathBase'], ['acgraph.error', 'acgraph.math', 'acgraph.math.Coordinate', 'acgraph.utils.IdGenerator', 'acgraph.vector.Shape', 'goog.array', 'goog.graphics.AffineTransform', 'goog.math'], false);
goog.addDependency('../../../../src/vector/PatternFill.js', ['acgraph.vector.PatternFill'], ['acgraph.utils.IdGenerator', 'acgraph.vector.Layer'], false);
goog.addDependency('../../../../src/vector/RadialGradient.js', ['acgraph.vector.RadialGradient'], ['acgraph.utils.IdGenerator', 'goog.Disposable'], false);
goog.addDependency('../../../../src/vector/Rect.js', ['acgraph.vector.Rect'], ['acgraph.math.Rect', 'acgraph.utils.IdGenerator', 'acgraph.vector.PathBase'], false);
goog.addDependency('../../../../src/vector/Renderer.js', ['acgraph.vector.Renderer'], ['acgraph.math.Rect', 'goog.dom', 'goog.net.ImageLoader'], false);
goog.addDependency('../../../../src/vector/Shape.js', ['acgraph.vector.Shape'], ['acgraph.math.Rect', 'acgraph.utils', 'acgraph.vector.Element'], false);
goog.addDependency('../../../../src/vector/Stage.js', ['acgraph.vector.Stage'], ['acgraph.error', 'acgraph.events.BrowserEvent', 'acgraph.math.Rect', 'acgraph.utils.HelperElement', 'acgraph.utils.IdGenerator', 'acgraph.utils.exporting', 'acgraph.vector.Circle', 'acgraph.vector.Clip', 'acgraph.vector.Defs', 'acgraph.vector.Ellipse', 'acgraph.vector.HatchFill', 'acgraph.vector.ILayer', 'acgraph.vector.Image', 'acgraph.vector.Layer', 'acgraph.vector.Path', 'acgraph.vector.PatternFill', 'acgraph.vector.Rect', 'acgraph.vector.Text', 'acgraph.vector.UnmanagedLayer', 'goog.Uri.QueryData', 'goog.array', 'goog.dom', 'goog.dom.classlist', 'goog.events.EventHandler', 'goog.events.EventTarget', 'goog.events.Listenable', 'goog.net.XhrIo', 'goog.structs.Map', 'goog.style'], false);
goog.addDependency('../../../../src/vector/Text.js', ['acgraph.vector.Text', 'acgraph.vector.Text.TextOverflow', 'acgraph.vector.Text.TextWrap'], ['acgraph.math.Rect', 'acgraph.utils.HTMLParser', 'acgraph.utils.IdGenerator', 'acgraph.vector.Element', 'acgraph.vector.TextSegment'], false);
goog.addDependency('../../../../src/vector/TextSegment.js', ['acgraph.vector.TextSegment'], ['acgraph.utils.IdGenerator', 'goog.Disposable'], false);
goog.addDependency('../../../../src/vector/UnmanagedLayer.js', ['acgraph.vector.UnmanagedLayer'], ['acgraph.utils.IdGenerator', 'acgraph.vector.Element'], false);
goog.addDependency('../../../../src/vector/primitives.js', ['acgraph.vector.primitives'], ['acgraph.vector.Path'], false);
goog.addDependency('../../../../src/vector/svg/Defs.js', ['acgraph.vector.svg.Defs'], ['acgraph.vector.Defs'], false);
goog.addDependency('../../../../src/vector/svg/Renderer.js', ['acgraph.vector.svg.Renderer'], ['acgraph.math.Rect', 'acgraph.utils.IdGenerator', 'acgraph.vector.Renderer', 'goog.dom', 'goog.math.Line', 'goog.object', 'goog.userAgent'], false);
goog.addDependency('../../../../src/vector/svg/Stage.js', ['acgraph.vector.svg.Stage'], ['acgraph.vector.Stage', 'acgraph.vector.svg.Defs'], false);
goog.addDependency('../../../../src/vector/vector.js', ['acgraph.vector', 'acgraph.vector.Anchor', 'acgraph.vector.Cursor', 'acgraph.vector.ILayer'], ['acgraph.math.Rect', 'goog.graphics.AffineTransform'], false);
goog.addDependency('../../../../src/vector/vml/Clip.js', ['acgraph.vector.vml.Clip'], ['acgraph.vector.Clip'], false);
goog.addDependency('../../../../src/vector/vml/Defs.js', ['acgraph.vector.vml.Defs'], ['acgraph.vector.Defs', 'acgraph.vector.vml.RadialGradient', 'acgraph.vector.vml.ShapeType'], false);
goog.addDependency('../../../../src/vector/vml/RadialGradient.js', ['acgraph.vector.vml.RadialGradient'], ['acgraph.vector.RadialGradient'], false);
goog.addDependency('../../../../src/vector/vml/Renderer.js', ['acgraph.vector.vml.Renderer'], ['acgraph.math.Coordinate', 'acgraph.math.Rect', 'acgraph.utils.IdGenerator', 'acgraph.vector.LinearGradient', 'acgraph.vector.Renderer', 'acgraph.vector.vml.RadialGradient', 'goog.array', 'goog.color', 'goog.cssom', 'goog.dom', 'goog.object'], false);
goog.addDependency('../../../../src/vector/vml/ShapeType.js', ['acgraph.vector.vml.ShapeType'], ['acgraph.utils.IdGenerator', 'goog.Disposable'], false);
goog.addDependency('../../../../src/vector/vml/Stage.js', ['acgraph.vector.vml.Stage'], ['acgraph.vector.Stage', 'acgraph.vector.vml.Clip', 'acgraph.vector.vml.Defs'], false);
goog.addDependency('../../../../src/vector/vml/Text.js', ['acgraph.vector.vml.Text'], ['acgraph.math.Rect', 'acgraph.vector.Text'], false);