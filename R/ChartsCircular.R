#' Circular Charts.
#'
#' Create a cricular charts based on ECharts 3.0.
#'
#'
#' @param message A dataframe.
#' @param width,height nada.
#' @return A circular charts based on ECharts 3.0.
#'
#'
#' @import htmlwidgets
#'
#' @export
ChartsCircular <- function(message, width = NULL, height = NULL) {

  # forward options using x
  x = list(
    message = message
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'ChartsCircular',
    x,
    width = width,
    height = height,
    package = 'Charts'
  )
}

#' Shiny bindings for ChartsCircular
#'
#' Output and render functions for using ChartsCircular within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a ChartsCircular
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name ChartsCircular-shiny
#'
#' @export
ChartsCircularOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'ChartsCircular', width, height, package = 'Charts')
}

#' @rdname ChartsCircular-shiny
#' @export
renderChartsCircular <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, ChartsCircularOutput, env, quoted = TRUE)
}
