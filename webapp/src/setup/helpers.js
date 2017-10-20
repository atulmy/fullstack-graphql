// Render element or component by provided condition
export function renderIf(condition, renderFn) {
    return condition ? renderFn() : null
}

// GraphQL Query Builder
export function queryBuilder(type = 'query', field, attributes = [], args = [], variables = null) {
    const query = {
        query: `
            ${ type } {
                ${ field } {
                    ${ attributes.join(',') }
                }
            }`,
        variables
    }

    // console.log(query)

    return query
}