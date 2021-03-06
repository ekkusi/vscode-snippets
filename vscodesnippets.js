{
	// Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	// Example:
	"Print to console": {
		"prefix": "log",
		"scope": "javascript,typescript",
		"body": [
			"console.log($1);"
		],
		"description": "Log output to console"
	},
	"Print obj to console": {
		"prefix": "logobj",
		"scope": "javascript,typescript",
		"body": [
			"console.log(JSON.stringify($1));"
		],
		"description": "Log obj to console"
	},
	"JSON.strigify()": {
		"prefix": "stringify",
		"scope": "javascript,typescript",
		"body": [
			"JSON.stringify($1)"
		],
		"description": "JSON.stringify()"
	},
	"TSX Component": {
    "scope": "javascript,typescript,typescriptreact",
    "prefix": "tsxcomp",
    "body": [
      "import React from \"react\";",
      "",
      "type ${1:ComponentName}Props = {};",
      "",
      "const ${1:ComponentName} = (props: ${1:ComponentName}Props): JSX.Element => {",
      "\treturn <></>;",
      "};",
      "",
      "export default ${1:ComponentName};",
      "",
    ],
    "description": "Create TSX Component"
  },
	"Svelte boilerplate": {
		"scope": "svelte",
		"prefix": "svelte",
    "body": [
      "<script lang=\"ts\">",
      "",
      "</script>",
      "",
      "<h1 class=\"title\">Terveperve</h1>",
      "",
      "<style lang=\"scss\">",
      "\t.title {",
      "\t\tcolor: blue;",
      "\t}",
      "</style>",
      "",
    ],
    "description": "Create Svelte boilerplate"
	}
}
