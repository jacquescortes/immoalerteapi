# SpecificationApiBackendImmoAlertefr.Alerte

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**idUser** | **String** |  | [optional] 
**statutAbonnement** | **String** |  | [optional] 
**statutAlerte** | **String** |  | [optional] 
**frequence** | **String** |  | [optional] 
**lbc** | [**Site**](Site.md) |  | [optional] 
**pap** | [**Site**](Site.md) |  | [optional] 
**log** | [**Site**](Site.md) |  | [optional] 
**slg** | [**Site**](Site.md) |  | [optional] 
**stats** | [**Stats**](Stats.md) |  | [optional] 


<a name="StatutAbonnementEnum"></a>
## Enum: StatutAbonnementEnum


* `run` (value: `"run"`)

* `stop` (value: `"stop"`)




<a name="StatutAlerteEnum"></a>
## Enum: StatutAlerteEnum


* `run` (value: `"run"`)

* `stop` (value: `"stop"`)




<a name="FrequenceEnum"></a>
## Enum: FrequenceEnum


* `1` (value: `"1"`)

* `10` (value: `"10"`)

* `60` (value: `"60"`)

* `1440` (value: `"1440"`)




