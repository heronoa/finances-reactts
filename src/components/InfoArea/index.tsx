import * as SC from './styles';
import { formatCurrentMonth } from '../../helpers/dataFilter';
import { ResumeItem } from '../ResumeItem';

type Props = {
    currentMonth: string,
    onMonthChange: (newMonth: string) => void
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)

    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)

    }


    return (
        <SC.Container>
            <SC.MonthArea>
                <SC.MonthArrow onClick={handlePrevMonth}>⬅️</SC.MonthArrow>
                <SC.MonthTitle>{formatCurrentMonth(currentMonth)}</SC.MonthTitle>
                <SC.MonthArrow onClick={handleNextMonth}>➡️</SC.MonthArrow>
            </SC.MonthArea>
            <SC.ResumeArea>
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despensas" value={expense} />
                <ResumeItem
                    title="Balanço"
                    value={income - expense}
                    color={income - expense < 0 ? 'red' : 'green'} />
            </SC.ResumeArea>
        </SC.Container>
    )
}
