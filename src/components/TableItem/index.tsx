import { Item } from '../../types/Item';
import * as SC from './styles';
import { formatDate } from '../../helpers/dataFilter';
import { categories } from '../../data/categories'

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {


    return (
        <SC.TableLine>
            <SC.TableColumn>{formatDate(item.date)}</SC.TableColumn>
            <SC.TableColumn>
                <SC.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </SC.Category>
            </SC.TableColumn>
            <SC.TableColumn>{item.title}</SC.TableColumn>
            <SC.TableColumn>
                <SC.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </SC.Value>
            </SC.TableColumn>
        </SC.TableLine>
    );
}

