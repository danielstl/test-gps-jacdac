
namespace modules {
    export const thingGps = new GyroscopeClient(
        "gps location?dev=self"
    )
}

namespace servers {
    function start() {
        // TODO: update with new program identifier
        jacdac.productIdentifier = 0x3a4ddec7
        // TODO: add short device description
        jacdac.deviceDescription = "GPS sensor"
        jacdac.startSelfServers(() => [
            jacdac.createMultiSensorServer(
                jacdac.SRV_GYROSCOPE,
                jacdac.GyroscopeRegPack.RotationRates,
                () => [Math.random() * 500, Math.random() * 500, Math.random() * 500]
            )
        ])
    }
    start()
}