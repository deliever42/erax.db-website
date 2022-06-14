<template>
    <h2 class="muted">
        extends
        <a :href="getDocRoute('classes', 'BaseDatabase')" target="_blank"
            >BaseDatabase&#60;V&#62;</a
        >
    </h2>
    <br />
    <hr />

    <h1>Constructor</h1>
    <Codeblock code="new EraxDB.MongoDatabase(options)" />
    <br />
    <div style="overflow-x: auto">
        <table>
            <thead>
                <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Optional</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>options</td>
                    <td>
                        <a :href="getDocRoute('typedefs', 'MongoDatabaseOptions')" target="_blank"
                            >MongoDatabaseOptions</a
                        >
                    </td>
                    <td><i class="fa-solid fa-check"></i></td>
                    <td>
                        { cache: true, url: 'mongodb://localhost:27017/', mongoOptions: {},
                        modelName: 'EraxDB', backup: { enabled: false } }
                    </td>
                    <td>Options for sqlite database</td>
                </tr>
            </tbody>
        </table>
    </div>
    <br />
    <hr />

    <h1>Properties</h1>
    <p class="property">.cache</p>
    <div class="property-data">
        <p class="muted">The cache</p>
        <br />
        <p class="muted">
            Type:
            <a>{ [key: <a :href="DocHelper.string" target="_blank">string</a>]: V }</a>
        </p>
    </div>
    <br />
    <p class="property">.options</p>
    <div class="property-data">
        <p class="muted">The mongo database options</p>
        <br />
        <p class="muted">
            Type:
            <a :href="getDocRoute('typedefs', 'MongoDatabaseOptions')" target="_blank"
                >MongoDatabaseOptions</a
            >
        </p>
    </div>
    <br />
    <p class="property">.connection</p>
    <div class="property-data">
        <p class="muted">The mongodb connection</p>
        <br />
        <p class="muted">
            Type:
            <a href="https://mongoosejs.com/docs/api/connection.html" target="_blank">Connection</a>
        </p>
    </div>
    <br />
    <p class="property">.model</p>
    <div class="property-data">
        <p class="muted">The connection model</p>
        <br />
        <p class="muted">
            Type:
            <a href="https://mongoosejs.com/docs/api/model.html" target="_blank">Model</a>
        </p>
    </div>
    <br />
    <hr />
    <h1>Methods</h1>
    <p class="property">.set(key, value)</p>

    <div class="property-data">
        <p class="muted">Set the data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>key</td>
                        <td>
                            <a :href="DocHelper.string" target="_blank">string</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>Key of the data set</td>
                    </tr>
                    <tr>
                        <td>value</td>
                        <td>
                            <a>V</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>Value of the data set</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">Returns: <a>Promise&#60;V&#62;</a></p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.get(key)</p>

    <div class="property-data">
        <p class="muted">Get the data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>key</td>
                        <td>
                            <a :href="DocHelper.string" target="_blank">string</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>Key of the get data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">Returns: <a>Promise&#60;V&#62;</a></p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.fetch(key)</p>

    <div class="property-data">
        <p class="muted">Get the data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>key</td>
                        <td>
                            <a :href="DocHelper.string" target="_blank">string</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>Key of the get data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">Returns: <a>Promise&#60;V&#62;</a></p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.has(key)</p>

    <div class="property-data">
        <p class="muted">Whether the data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>key</td>
                        <td>
                            <a :href="DocHelper.string" target="_blank">string</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>Key of the has data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns: <a :href="DocHelper.boolean" target="_blank">Promise&#60;boolean&#62;</a>
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.clear()</p>

    <div class="property-data">
        <p class="muted">Delete the all data</p>
        <br />
        <p class="muted">
            Returns: <a :href="DocHelper.void" target="_blank">Promise&#60;void&#62;</a>
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.delete(key)</p>

    <div class="property-data">
        <p class="muted">Delete the data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>key</td>
                        <td>
                            <a :href="DocHelper.string" target="_blank">string</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>Key of the delete data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns: <a :href="DocHelper.void" target="_blank">Promise&#60;void&#62;</a>
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.destroy()</p>

    <div class="property-data">
        <p class="muted">Delete the database file and clean cache</p>
        <br />
        <p class="muted">
            Returns: <a :href="DocHelper.void" target="_blank">Promise&#60;void&#62;</a>
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.getAll(options)</p>

    <div class="property-data">
        <p class="muted">Get the all data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BaseFetchOptions')" target="_blank"
                                >BaseFetchOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{ cache: true, force: true }</td>
                        <td>Options to fetch all data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns:
            <a
                >Promise&#60;<a :href="DocHelper.Array" target="_blank">Array</a>&#60;{ ID:
                <a :href="DocHelper.string" target="_blank">string</a>; data: V }&#62;&#62;</a
            >
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.fetchAll(options)</p>

    <div class="property-data">
        <p class="muted">Get the all data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BaseFetchOptions')" target="_blank"
                                >BaseFetchOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{ cache: true, force: true }</td>
                        <td>Options to fetch all data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns:
            <a
                >Promise&#60;<a :href="DocHelper.Array" target="_blank">Array</a>&#60;{ ID:
                <a :href="DocHelper.string" target="_blank">string</a>; data: V }&#62;&#62;</a
            >
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.size(options)</p>

    <div class="property-data">
        <p class="muted">Get the all data size</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BaseFetchOptions')" target="_blank"
                                >BaseFetchOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{ cache: true, force: true }</td>
                        <td>Options to fetch all data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns: <a :href="DocHelper.number" target="_blank">Promise&#60;number&#62;</a>
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.keyArray(options)</p>

    <div class="property-data">
        <p class="muted">Retrieves all data key</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BaseFetchOptions')" target="_blank"
                                >BaseFetchOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{ cache: true, force: true }</td>
                        <td>Options to fetch all data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns:
            <a
                >Promise&#60;<a :href="DocHelper.Array" target="_blank">Array</a>&#60;<a
                    :href="DocHelper.string"
                    target="_blank"
                    >string</a
                >&#62;&#62;</a
            >
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.valueArray(options)</p>

    <div class="property-data">
        <p class="muted">Retrieves all data value</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BaseFetchOptions')" target="_blank"
                                >BaseFetchOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{ cache: true, force: true }</td>
                        <td>Options to fetch all data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns:
            <a>Promise&#60;<a :href="DocHelper.Array" target="_blank">Array</a>&#60;V&#62;&#62;</a>
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.push(key, values, options)</p>

    <div class="property-data">
        <p class="muted">Set the data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>key</td>
                        <td>
                            <a :href="DocHelper.string" target="_blank">string</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>Key of the push data</td>
                    </tr>
                    <tr>
                        <td>values</td>
                        <td>
                            <a
                                >V |
                                <a :href="DocHelper.Array" target="_blank">Array</a>&#60;V&#62;</a
                            >
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>Values of the push data</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BasePushOptions')" target="_blank"
                                >BasePushOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{ returnIfExists: false }</td>
                        <td>Options of the push data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">Returns: <a>Promise&#60;V&#62;</a></p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.pull(key, values)</p>

    <div class="property-data">
        <p class="muted">Pull the data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>key</td>
                        <td>
                            <a :href="DocHelper.string" target="_blank">string</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>Key of the pull data</td>
                    </tr>
                    <tr>
                        <td>values</td>
                        <td>
                            <a
                                >V |
                                <a :href="DocHelper.Array" target="_blank">Array</a>&#60;V&#62;</a
                            >
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>Values of the pull data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">Returns: <a>Promise&#60;V&#62;</a></p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.type(key)</p>

    <div class="property-data">
        <p class="muted">Set the data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>key</td>
                        <td>
                            <a :href="DocHelper.string" target="_blank">string</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>Key of the get data type</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns: <a :href="DocHelper.any" target="_blank">Promise&#60;any&#62;</a>
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.math(key, operator, value, options)</p>

    <div class="property-data">
        <p class="muted">Math operations on data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>key</td>
                        <td>
                            <a :href="DocHelper.string" target="_blank">string</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>Key of the math data</td>
                    </tr>
                    <tr>
                        <td>operator</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'Operators')" target="_blank"
                                >Operators</a
                            >
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The math operator</td>
                    </tr>
                    <tr>
                        <td>value</td>
                        <td>
                            <a>V</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>Value of the math data</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BaseMathOptions')" target="_blank"
                                >BaseMathOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{ goToNegative: true }</td>
                        <td>The math options</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">Returns: <a>Promise&#60;V&#62;</a></p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.filter(fn, options)</p>

    <div class="property-data">
        <p class="muted">Filter the all data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>fn</td>
                        <td>
                            (value:
                            <a :href="getDocRoute('typedefs', 'Schema')" target="_blank"
                                >Schema&#60;V&#62;</a
                            >, index: <a :href="DocHelper.number" target="_blank">number</a>, array:
                            <a :href="DocHelper.Array" target="_blank">Array</a>&#60;<a
                                :href="getDocRoute('typedefs', 'Schema')"
                                target="_blank"
                                >Schema &#60;V&#62;</a
                            >&#62;) =>
                            <a :href="DocHelper.boolean" target="_blank">boolean</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The function to filter all data</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BaseFetchOptions')" target="_blank"
                                >BaseFetchOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{ cache: true, force: true }</td>
                        <td>Options of the filter all data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns:
            <a
                >Promise&#60;<a :href="DocHelper.Array" target="_blank">Array</a>&#60;{ ID:
                <a :href="DocHelper.string" target="_blank">string</a>; data: V }&#62;&#62;</a
            >
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.find(fn, options)</p>

    <div class="property-data">
        <p class="muted">Find the data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>fn</td>
                        <td>
                            (value:
                            <a :href="getDocRoute('typedefs', 'Schema')" target="_blank"
                                >Schema&#60;V&#62;</a
                            >, index: <a :href="DocHelper.number" target="_blank">number</a>, array:
                            <a :href="DocHelper.Array" target="_blank">Array</a>&#60;<a
                                :href="getDocRoute('typedefs', 'Schema')"
                                target="_blank"
                                >Schema &#60;V&#62;</a
                            >&#62;) =>
                            <a :href="DocHelper.boolean" target="_blank">boolean</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The function to find the data</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BaseFetchOptions')" target="_blank"
                                >BaseFetchOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{ cache: true, force: true }</td>
                        <td>Options of the find the data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns:
            <a>
                Promise&#60;{ ID:
                <a :href="DocHelper.string" target="_blank">string</a>; data: V } >&#62;</a
            >
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.sort(fn, options)</p>

    <div class="property-data">
        <p class="muted">Sort the all data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>fn</td>
                        <td>
                            (a:
                            <a :href="getDocRoute('typedefs', 'Schema')" target="_blank"
                                >Schema&#60;V&#62;</a
                            >, b:
                            <a :href="getDocRoute('typedefs', 'Schema')" target="_blank"
                                >Schema&#60;V&#62;</a
                            >) =>
                            <a :href="DocHelper.number" target="_blank">number</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The function to sort all data</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BaseFetchOptions')" target="_blank"
                                >BaseFetchOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{ cache: true, force: true }</td>
                        <td>Options of the sort all data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns:
            <a
                >Promise&#60;<a :href="DocHelper.Array" target="_blank">Array</a>&#60;{ ID:
                <a :href="DocHelper.string" target="_blank">string</a>; data: V }&#62;&#62;</a
            >
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.map(fn, options)</p>

    <div class="property-data">
        <p class="muted">Map the all data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>fn</td>
                        <td>
                            (value:
                            <a :href="getDocRoute('typedefs', 'Schema')" target="_blank"
                                >Schema&#60;V&#62;</a
                            >, index: <a :href="DocHelper.number" target="_blank">number</a>, array:
                            <a :href="DocHelper.Array" target="_blank">Array</a>&#60;<a
                                :href="getDocRoute('typedefs', 'Schema')"
                                target="_blank"
                                >Schema &#60;V&#62;</a
                            >&#62;) =>
                            <a :href="DocHelper.boolean" target="_blank">boolean</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The function to map all data</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BaseFetchOptions')" target="_blank"
                                >BaseFetchOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{ cache: true, force: true }</td>
                        <td>Options of the map all data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns:
            <a
                >Promise&#60;<a :href="DocHelper.Array" target="_blank">Array</a>&#60;{ ID:
                <a :href="DocHelper.string" target="_blank">string</a>; data: V }&#62;&#62;</a
            >
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.reduce(fn, initivalValue, options)</p>

    <div class="property-data">
        <p class="muted">Set the data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>fn</td>
                        <td>
                            (previousValue:
                            <a :href="getDocRoute('typedefs', 'Schema')" target="_blank"
                                >Schema&#60;V&#62;</a
                            >, currentValue:
                            <a :href="getDocRoute('typedefs', 'Schema')" target="_blank"
                                >Schema&#60;V&#62;</a
                            >, currentIndex: <a :href="DocHelper.number" target="_blank">number</a>,
                            array: <a :href="DocHelper.Array" target="_blank">Array</a>&#60;<a
                                :href="getDocRoute('typedefs', 'Schema')"
                                target="_blank"
                                >Schema &#60;V&#62;</a
                            >&#62;) =>
                            <a :href="DocHelper.any" target="_blank">any</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The function to reduce all data</td>
                    </tr>
                    <tr>
                        <td>initinalValue</td>
                        <td>
                            <a :href="DocHelper.any" target="_blank">any</a>
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>Initial value of reduce function</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BaseFetchOptions')" target="_blank"
                                >BaseFetchOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{ cache: true, force: true }</td>
                        <td>Options of the reduce all data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns: <a :href="DocHelper.any" target="_blank">Promise&#60;any&#62;</a>
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.clone(options)</p>

    <div class="property-data">
        <p class="muted">Clone the all data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BaseFetchOptions')" target="_blank"
                                >BaseFetchOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{ cache: true, force: true }</td>
                        <td>Options of the clone all data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns:
            <a
                >Promise&#60;{ [key: <a :href="DocHelper.string" target="_blank">string</a>]: V
                }&#62;</a
            >
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.findAndDelete(fn, options)</p>

    <div class="property-data">
        <p class="muted">Finds and deletes data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>fn</td>
                        <td>
                            (key: <a :href="DocHelper.string" target="_blank">string</a>, value: V)
                            =>
                            <a :href="DocHelper.boolean" target="_blank">boolean</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The function to find datas</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BaseFetchOptions')" target="_blank"
                                >BaseFetchOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{}</td>
                        <td>Options of the get all data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns:
            <a :href="DocHelper.number" target="_blank">Promise&#60;number&#62;</a>
        </p>
    </div>
    <br />
    <hr />
    <br />
    <p class="property">.findAndModify(fn, newValue, options)</p>

    <div class="property-data">
        <p class="muted">Finds and modifies data</p>
        <br />
        <div style="overflow-x: auto">
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>fn</td>
                        <td>
                            (key: <a :href="DocHelper.string" target="_blank">string</a>, value: V)
                            =>
                            <a :href="DocHelper.boolean" target="_blank">boolean</a>
                        </td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The function to find datas</td>
                    </tr>
                    <tr>
                        <td>newValue</td>
                        <td>V</td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td><i class="fa-solid fa-xmark"></i></td>
                        <td>The new value for finded datas</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>
                            <a :href="getDocRoute('typedefs', 'BaseFetchOptions')" target="_blank"
                                >BaseFetchOptions</a
                            >
                        </td>
                        <td><i class="fa-solid fa-check"></i></td>
                        <td>{}</td>
                        <td>Options of the get all data</td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
        <p class="muted">
            Returns:
            <a :href="DocHelper.number" target="_blank">Promise&#60;number&#62;</a>
        </p>
    </div>

    <br />
    <hr />
    <br />
    <p class="property">.toJSON()</p>

    <div class="property-data">
        <p class="muted">Get the all class properties</p>
        <br />

        <p class="muted">
            Returns:
            <a
                >Promise&#60;{ [prop: <a :href="DocHelper.string" target="_blank">string</a>]:
                <a :href="DocHelper.any" target="_blank">any</a> }&#62;</a
            >
        </p>
    </div>
    <br />
    <hr />
    <br />
    <div style="display: flex">
        <span class="badge">GET</span>
        <p class="property">.state()</p>
    </div>

    <div class="property-data">
        <p class="muted">Get the mongodb connection state</p>
        <br />

        <p class="muted">
            Returns:
            <a>DISCONNECTED | DISCONNECTING | CONNECTED | CONNECTING</a>
        </p>
    </div>

    <br />
    <hr />
</template>

<script setup lang="ts">
import $ from 'jquery';

import Codeblock from '@/components/Codeblock.vue';

import DocHelper from '@/doc_helper.json';
import docs from '@/docs.json';

const getDocRoute = (c: string, p: string) => {
    return (docs as any)[c].find((doc: any) => doc.name === p)?.to;
};
</script>

<script lang="ts">
export default {
    name: 'MongoDatabase<V>'
};
</script>
