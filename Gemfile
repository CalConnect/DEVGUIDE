source "https://rubygems.org"

gem "jekyll", "~> 4.3.4"
gem "calconnect-theme", path: "../calconnect-theme"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-asciidoc"
  gem "jekyll-vite"
end

gem "jekyll-archives"

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
