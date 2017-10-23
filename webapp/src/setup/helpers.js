// Helpers

// Render element or component by provided condition
export function renderIf(condition, renderFn) {
    return condition ? renderFn() : null
}

// GraphQL Query Builder
export function queryBuilder(options) {
    options.type = options.type ? options.type : 'query'
    options.operation = options.operation ? options.operation : ''
    options.fields = options.fields ? options.fields : []
    options.data = options.data ? options.data : []
    options.variables = options.variables ? options.variables : []

    const query = {
        query: `
            ${ options.type } {
                ${ options.operation } ${ queryDataFormatter(options.data) } {
                    ${ options.fields.join(',') }
                }
            }`,
        variables: options.variables
    }

    console.log(query)

    return query
}

// Private - Query Data [array to string (key: value, ...) eg: getThoughts(id: 1, user: 2)]
function queryDataFormatter(data) {
    const dataFormatted = queryDataTransform(data)

    return dataFormatted.length ? `(${ dataFormatted.reduce((dataString, element, i) => `${ dataString }${ i !== 0 ? ',' : '' } ${ element.field }: ${ typeof element.value === 'number' ? element.value : '"'+element.value.replace(/"/g, '\\"')+'"' }`, '') })` : ''
}

// Private - Query Data formatter [object to array [{ key: value }, { key: value } ...]
function queryDataTransform(data = null) {
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