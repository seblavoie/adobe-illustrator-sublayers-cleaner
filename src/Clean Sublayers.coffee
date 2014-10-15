class SublayerHelper

  constructor: () ->
    @manageSublayers app.activeDocument

  manageSublayers: (root) ->
    for layer in root.layers
      for sublayer in layer.layers
        @renameLayer sublayer


  renameLayer: (layer) ->
    # Prepends the sublayer name with the parents name
    newName    = "#{layer.parent.name} : #{layer.name}"

    # Removes the trailing "copy #"
    newName    = newName.replace /\- ((copy)|(copie))( [0-9]+)?/g, ""
    layer.name = newName

sublayerHelper = new SublayerHelper()

