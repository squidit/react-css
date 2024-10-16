# DataLayerHelper

Uma classe utilitária para enviar dados para a camada de dados.

## Descrição

`DataLayerHelper` é uma classe que fornece métodos para enviar dados para a camada de dados (dataLayer) de forma simplificada.

## Propriedades

- `window`: Instância do objeto `window` estendida com a interface `WindowWithDataLayer`, que inclui a camada de dados.

## Métodos

### `sendToDataLayer(payload: object): void`

Envia um objeto de payload para a camada de dados.

- **Parâmetro**: `payload` - Um objeto contendo os dados a serem enviados.
- **Retorno**: Nenhum. Este método não retorna um valor.

## Exemplo de Uso

```typescript
import DataLayerHelper from './DataLayerHelper';

// Criar uma instância de DataLayerHelper
const dataLayerHelper = new DataLayerHelper();

// Definir um payload para ser enviado
const eventPayload = {
  event: 'pageView',
  page: '/home',
};

// Enviar o payload para a camada de dados
dataLayerHelper.sendToDataLayer(eventPayload);
```