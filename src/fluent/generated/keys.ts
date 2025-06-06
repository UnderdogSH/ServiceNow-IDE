import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'a17378517dd64bbeb55b38c1538e2693'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '6e412457d02b4b6ca199c864e4b9e9f3'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '8a742117ae5c431a9054c513c6112084'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '867a7b57c9f6421c82ce941b1411c55b'
                    }
                }
            }
        }
    }
}
