(function() {
  var SublayerHelper, sublayerHelper;

  SublayerHelper = (function() {
    function SublayerHelper() {
      this.manageSublayers(app.activeDocument);
    }

    SublayerHelper.prototype.manageSublayers = function(root) {
      var i, layer, len, ref, results, sublayer;
      ref = root.layers;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        layer = ref[i];
        results.push((function() {
          var j, len1, ref1, results1;
          ref1 = layer.layers;
          results1 = [];
          for (j = 0, len1 = ref1.length; j < len1; j++) {
            sublayer = ref1[j];
            results1.push(this.renameLayer(sublayer));
          }
          return results1;
        }).call(this));
      }
      return results;
    };

    SublayerHelper.prototype.renameLayer = function(layer) {
      var newName;

      if(layer.name.indexOf(layer.parent.name) == -1) {
        newName = layer.parent.name + " : " + layer.name;
        newName = newName.replace(/(\- )?((copy)|(copie))( [0-9]+)?/g, "");
        newName = newName.replace(/[L-l]ayer ?/g, "");
        return layer.name = newName;
      }
    };

    return SublayerHelper;

  })();

  sublayerHelper = new SublayerHelper();

}).call(this);
