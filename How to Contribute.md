# How to Contribute to this Document

This Wiki is based on [Gollum](https://github.com/gollum/gollum), a [Git](http://git-scm.com/) based Wiki system. The markup language used is [Markdown](http://daringfireball.net/projects/markdown/syntax) in the [Github flavored](https://help.github.com/articles/github-flavored-markdown/) version.

[devguide.calconnect.org](http://devguide.calconnect.org) only serves the Wiki content, without any option to edit it. The sources of this Wiki are available at [github.com/CalConnect/DEVGUIDE](https://github.com/CalConnect/DEVGUIDE). All changes at GitHub will be pushed to http://devguide.calconnect.org on a regular base. At present this is a manual process, so it might take some time.

## Ways to contribute

### Send an email

The editorial team is monitoring the public CalConnect [calendar developer's list](http://lists.calconnect.org/mailman/listinfo/caldeveloper-l) so please send comments, corrections, etc to that list.

### Raise an issue on GitHub

The sources of this Wiki are available on GitHub. [DEVGUIDE](https://github.com/CalConnect/DEVGUIDE/issues) 

### Send a pull request

Contributors who are familiar with Markdown and Git may also send a pull request.

Note that this Wiki uses custom templates and css that are not available on GitHub, which means that the presentation on GitHub will be different from the presentation on http://devguide.calconnect.org

To give the Wiki a consistent appearance, please follow the rules below:

#### Editorial conventions

* Use the blockquote character `>` when adding quotes from an RFC.
* Always add references to the original RFC. Link the html version of the RFC at http://tools.ietf.org/html/rfcXXXX.
* Add deep links using anchors if possible (i.e. like http://tools.ietf.org/html/rfcXXXX#section-1.2).
* Github Flavored Markdown supports XML comments, i.e. `<!-- a comment is not visible in the rendered page -->`. These can be useful to invisibly annotate content of the wiki.

