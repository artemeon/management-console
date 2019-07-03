import { expect } from 'chai'
import * as helpers from '../../src/Globals/InstallerHelfers/InstallerHelfer'
import modules from './modules.json'
import samples from './samples.json'

describe('Installer helper functions', function () {
  let module = {
    title: 'agp_commons',
    description:
      'Holds common values and settings, updates the config-files if required.',
    versionAvailable: '7.1.2',
    author: 'ARTEMEON',
    requires: {
      system: '7.1',
      dashboard: '7.1',
      tags: '7.1',
      mediamanager: '7.1',
      nestedset: '7.1'
    },
    path: '/core_agp/module_agp_commons',
    providesInstaller: true,
    versionInstalled: '7.1.2',
    isInstallable: false
  }
  it('Module is not Installable', function () {
    expect(helpers.default.prototype.isInstallable(module)).to.equal(false)
  })
  let module2 = {
    title: 'agp_commons',
    description:
      'Holds common values and settings, updates the config-files if required.',
    versionAvailable: '7.1.2',
    author: 'ARTEMEON',
    requires: {
      system: '7.1',
      dashboard: '7.1',
      tags: '7.1',
      mediamanager: '7.1',
      nestedset: '7.1'
    },
    path: '/core_agp/module_agp_commons',
    providesInstaller: true,
    versionInstalled: null,
    isInstallable: true
  }
  it('Module is  Installable', function () {
    expect(helpers.default.prototype.isInstallable(module2)).to.equal(true)
  })
  it('All modules installed', function () {
    expect(helpers.default.prototype.allInstalled(modules.installed)).to.equal(
      true
    )
  })
  it('not all modules are installed', function () {
    expect(
      helpers.default.prototype.allInstalled(modules.not_installed)
    ).to.equal(false)
  })
  it('All samples installed', function () {
    expect(helpers.default.prototype.allInstalledSamples(samples)).to.equal(
      true
    )
  })
  it('All Modules updated', function () {
    expect(helpers.default.prototype.allUpdated(modules.updated)).to.equal(true)
  })
  it('Not all Modules are updated', function () {
    expect(helpers.default.prototype.allUpdated(modules.not_updated)).to.equal(
      false
    )
  })
})
