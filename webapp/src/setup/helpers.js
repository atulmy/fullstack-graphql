// Render element or component by provided condition
export function renderIf(condition, renderFn) {
    return condition ? renderFn() : null
}

// GraphQL Query Builder
export function queryBuilder(options) {
    options.type = options.type ? options.type : 'query'
    options.operation = options.operation ? options.operation : ''
    options.fields = options.fields ? options.fields : []
    options.data = options.data ? queryDataFormatter(options.data) : []
    options.variables = options.variables ? options.variables : []

    let query = {}

    if(options.type === 'query') {
        query = {
            query: `
            ${ options.type } {
                ${ options.operation } {
                    ${ options.fields.join(',') }
                }
            }`,
            variables: options.variables
        }
    } else {
        query = {
            query: `
            ${ options.type } {
                ${ options.operation } (${ options.data.reduce((dataString, element, i) => `${ dataString }${ i !== 0 ? ',' : '' } ${ element.field }: "${ element.value }"`, '') }) {
                    ${ options.fields.join(',') }
                }
            }`,
            variables: options.variables
        }
    }

    console.log(query)

    return query
}

export function queryDataFormatter(data = null) {
    let dataFormatted = []

    if(Object.keys(data).length) {
        Object.keys(data).forEach(function (key) {
            dataFormatted.push({
                field: key,
                value: data[key]
            })
        })
    }

    return dataFormatted
}