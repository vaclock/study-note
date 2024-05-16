import {existsSync} from 'node:fs'
import {exec} from 'node:child_process'

// 移除目录
export default function cleanDist() {
    return {
        name: 'clean-dist-plugin',
        setup(build) {
            build.onStart(() => {
                const {outdir, outfile} = build.initialOptions
                if (outdir && existsSync(outdir)) {
                    exec(`rm -rf ${outdir}`)
                }
                if (outfile && existsSync(outfile)) {
                    exec(`rm ${outfile}`)
                }
            })
        }
    }
}