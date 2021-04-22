import { config } from "./config";
import { io, ManagerOptions } from "socket.io-client";
import { getMyConnection } from "./decoders";
import { PageRecord } from "./entities";
import { guid } from "maishu-toolkit";

interface MerchantAuditSuccessMessage {
    merchant: {
        id: string,
        companyName: string,
        contacts: string,
        contactMobile: string,
        email: string,
        businessLicense: string,
        createDateTime: string,
        status: string
    },
    user: {
        id: string,
        data: {
            applicationId: string
        },
        remark: string
    }
}

export function startMessage(messageHost: string,) {

    let extraHeaders: ManagerOptions["extraHeaders"] = {};
    extraHeaders["client-name"] = "settlement";

    let socket = io(`http://${messageHost}/`, { extraHeaders });
    socket.on("MerchantAuditSuccess", async function (msg: MerchantAuditSuccessMessage) {

        let conn = await getMyConnection();
        let pageRecords = conn.getRepository(PageRecord);

        let existsPageRecords = await pageRecords.find({ applicationId: msg.user.data.applicationId });
        let defaultPageRecords = await pageRecords.find({ applicationId: config.zwAppId });
        let toInsert: PageRecord[] = [];

        defaultPageRecords.forEach(o => {
            if (existsPageRecords.filter(c => c.name == o.name).length > 0) {
                return;
            }

            o.applicationId = msg.user.data.applicationId;
            o.id = guid();
            o.createDateTime = new Date();

            toInsert.push(o);
        })

        await pageRecords.insert(toInsert);

    });

}

