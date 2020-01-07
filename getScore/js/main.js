$(function ()
{
    //获取数值
    var l = $("tr").length;
    //隐藏不必要的列
    $(".nb").css("display", "none");
    $("#btn").click(function ()
    {
        //点提交按钮触发所有实现		
        //行获取总计
        for (var i = 1; i < l - 2; i++)
        {
            var j = 8;
            if ($("tr").eq(i).children("td").length > $("tr").eq(i + 1).children("td").length)
            {
                //行获取总计
                $("tr").eq(i).children("td").eq(j - 1).text(colSum(i, j - 1));
                //计算平均值
                $("tr").eq(i).children("td").eq(j).text(avg_Col(i, j));
                //连乘
                //开n次方
                if ($("tr").eq(i).children("td").eq(j - 1).text() > 0)
                {
                    $("tr").eq(i).children("td").eq(j + 1).text(lC(i, j - 1));
                    $("tr").eq(i).children("td").eq(j + 2).text(kF(i, j + 1));
                }
                else
                {
                    $("tr").eq(i).children("td").eq(j + 1).text();
                    $("tr").eq(i).children("td").eq(j + 2).text();
                }
            }
            else
            {
                //行获取总计
                $("tr").eq(i).children("td").eq(j - 2).text(colSum(i, j - 2));
                //计算平均值
                $("tr").eq(i).children("td").eq(j - 1).text(avg_Col(i, j - 1));
                //连乘
                //开n次方				
                if ($("tr").eq(i).children("td").eq(j - 2).text() > 0)
                {
                    $("tr").eq(i).children("td").eq(j).text(lC(i, j - 2));
                    $("tr").eq(i).children("td").eq(j + 1).text(kF(i, j));
                }
                else
                {
                    $("tr").eq(i).children("td").eq(j).text();
                    $("tr").eq(i).children("td").eq(j + 1).text();
                }
            }
        }
        //列行获取总计(15)
        var v = $("tr").eq(l - 2).children("td").length;
        for (var m = 1; m < v; m++)
        {
            if (m < 10 && m != 8) {
                $("tr").eq(l - 2).children("td").eq(m).text(rowSum(m));
            }
            else if (m == 8) {
                $("tr").eq(l - 2).children("td").eq(m).text();
            }
            else {
                //				$("tr").eq(l-2).children("td").eq(m).text(rowSum(m));
            }
        }
        var p = $("#sumavg").text();
        $("#sumavg").text(Number(p).toFixed(6));
        //权重WI
        //AHP权重和
        for (var i = 1; i < l - 2; i++)
        {
            var j = 8;
            if ($("tr").eq(i).children("td").length > $("tr").eq(i + 1).children("td").length)
            {
                if ($("tr").eq(i).children("td").eq(j - 1).text() > 0) {
                    $("tr").eq(i).children("td").eq(j + 3).text(wi(i, j + 2));
                }
                else {
                    $("tr").eq(i).children("td").eq(j + 3).text();
                }
            }
            else
            {
                if ($("tr").eq(i).children("td").eq(j - 1).text() > 0) {
                    $("tr").eq(i).children("td").eq(j + 2).text(wi(i, j + 1));
                }
                else {
                    $("tr").eq(i).children("td").eq(j + 2).text();
                }
            }
        }
        if ($("#wz").text() > 0)
        {
            $("#wi").text(1);
            $("#ahp").text(1);
            var i = 1;
            var j = 12;
            //AHP权重和
            $("tr").eq(i).children("td").eq(j).text(ahpSum(i, j - 1));
            $("tr").eq(i + 3).children("td").eq(j).text(ahpSum(i + 3, j - 1));
            $("tr").eq(i + 7).children("td").eq(j).text(ahpSum(i + 7, j - 1));
            $("tr").eq(i + 10).children("td").eq(j).text(ahpSum(i + 10, j - 1));
            $("tr").eq(i + 13).children("td").eq(j).text(ahpSum(i + 13, j - 1));
            //决策信息熵e
            $("tr").eq(i).children("td").eq(j + 1).text(eSum(i, j - 4));
            $("tr").eq(i + 3).children("td").eq(j + 1).text(eSum(i + 3, j - 4));
            $("tr").eq(i + 7).children("td").eq(j + 1).text(eSum(i + 7, j - 4));
            $("tr").eq(i + 10).children("td").eq(j + 1).text(eSum(i + 10, j - 4));
            $("tr").eq(i + 13).children("td").eq(j + 1).text(eSum(i + 13, j - 4));
            //	熵权
            $("#o1").text(shangQuan(1));
            $("#o4").text(shangQuan(4));
            $("#o8").text(shangQuan(8));
            $("#o11").text(shangQuan(11));
            $("#o14").text(0);
            //商权和
            $("#se").text(1);
            //最终权重1
            for (var i = 1; i < l - 2; i++)
            {
                var j = 8;
                if ($("tr").eq(i).children("td").length > $("tr").eq(i + 1).children("td").length)
                {
                    if ($("tr").eq(i).children("td").eq(j - 1).text() > 0) {
                        $("tr").eq(i).children("td").eq(j + 7).text(finalWi(i, j));
                    }
                    else {
                        $("tr").eq(i).children("td").eq(j + 7).text();
                    }
                }
                else
                {
                    if ($("tr").eq(i).children("td").eq(j - 1).text() > 0) {
                        $("tr").eq(i).children("td").eq(j + 3).text(finalWi(i, j));
                    }
                    else {
                        $("tr").eq(i).children("td").eq(j + 3).text();
                    }
                }
            }
            //最终权重
            $("#q1").text(finallyWi(1));
            $("#q4").text(finallyWi(4));
            $("#q8").text(finallyWi(8));
            $("#q11").text(finallyWi(11));
            $("#q14").text(finallyWi(14));
            //最终权重和
            $("#fwi").text(1);
            //创新系数
            for (var i = 1; i < l - 2; i++)
            {
                var j = 8;
                if ($("tr").eq(i).children("td").length > $("tr").eq(i + 1).children("td").length)
                {
                    if ($("tr").eq(i).children("td").eq(j - 1).text() > 0) {
                        $("tr").eq(i).children("td").eq(j + 9).text(innovation(i, j));
                    }
                    else {
                        $("tr").eq(i).children("td").eq(j + 9).text();
                    }
                }
                else
                {
                    if ($("tr").eq(i).children("td").eq(j - 1).text() > 0) {
                        $("tr").eq(i).children("td").eq(j + 4).text(innovation(i, j));
                    }
                    else {
                        $("tr").eq(i).children("td").eq(j + 4).text();
                    }
                }
            }
            //得分
            for (var i = 1; i < l - 2; i++)
            {
                var j = 8;
                if ($("tr").eq(i).children("td").length > $("tr").eq(i + 1).children("td").length)
                {
                    if ($("tr").eq(i).children("td").eq(j - 1).text() > 0) {
                        $("tr").eq(i).children("td").eq(j + 10).text(getScore(i, j));
                    }
                    else {
                        $("tr").eq(i).children("td").eq(j + 10).text();
                    }
                }
                else
                {
                    if ($("tr").eq(i).children("td").eq(j - 1).text() > 0) {
                        $("tr").eq(i).children("td").eq(j + 5).text(getScore(i, j));
                    }
                    else {
                        $("tr").eq(i).children("td").eq(j + 5).text();
                    }
                }
            }
            //总得分
            $("#ss").text(sumScore());
        }
    }) //行获取总计函数
    function colSum(i, j)
    {
        var colsum = 0;
        for (var p = j - 1; p >= j - 5; p--)
        {
            var w = Number($("tr").eq(i).children("td").eq(p).children("input").val());
            colsum += w;
        }
        return colsum;
    }
    //列行获取总计函数
    function rowSum(m)
    {
        var rowsum = 0;
        for (var q = 1; q < l - 2; q++)
        {
            if ($("tr").eq(q).children("td").length > $("tr").eq(q + 1).children("td").length)
            {
                if ($("tr").eq(q).children("td").eq(m + 1).children().length > 0) {
                    rowsum += Number($("tr").eq(q).children("td").eq(m + 1).children("input").val());
                }
                else {
                    rowsum += Number($("tr").eq(q).children("td").eq(m + 1).text());
                }
            }
            else
            {
                if ($("tr").eq(q).children("td").eq(m).children().length > 0) {
                    rowsum += Number($("tr").eq(q).children("td").eq(m).children("input").val());
                }
                else {
                    rowsum += Number($("tr").eq(q).children("td").eq(m).text());
                }
            }
        }
        return rowsum;
    }
    //获取平均值函数
    function avg_Col(i, j)
    {
        var str = $("tr").eq(i).children("td").eq(j - 1).text();
        var avg = Number(str) / 5;
        return avg.toFixed(1);
    }
    //连乘函数
    function lC(i, j)
    {
        var ji = 1;
        for (var p = j - 1; p >= j - 5; p--)
        {
            var w = Number($("tr").eq(i).children("td").eq(p).children("input").val());
            if (w != 0) {
                ji *= w;
            }
        }
        return ji;
    }
    //开n次方
    function kF(i, j)
    {
        var num = $("tr").eq(i).children("td").eq(j).text();
        var ji = Math.pow(Number(num), 1 / 5);
        return ji.toFixed(6);
    }
    //权重WI
    function wi(i, j)
    {
        var num = Number($("tr").eq(i).children("td").eq(j).text());
        var num1 = Number($("#wz").text());
        return (num / num1).toFixed(6);
    }
    //AHP权重和
    function ahpSum(i, j)
    {
        var sum = 0;
        if (i == 1)
        {
            var u = i + 3;
            sum += Number($("tr").eq(i).children("td").eq(j).text());
            for (i = 2; i < u; i++) {
                sum += Number($("tr").eq(i).children("td").eq(j - 1).text());
            }
            return sum.toFixed(6);
        }
        else if (i == 4)
        {
            var u = i + 4;
            sum += Number($("tr").eq(i).children("td").eq(j).text());
            for (i = 5; i < u; i++) {
                sum += Number($("tr").eq(i).children("td").eq(j - 1).text());
            }
            return sum.toFixed(6);
        }
        else if (i == 8)
        {
            var u = i + 3;
            sum += Number($("tr").eq(i).children("td").eq(j).text());
            for (i = 9; i < u; i++) {
                sum += Number($("tr").eq(i).children("td").eq(j - 1).text());
            }
            return sum.toFixed(6);
        }
        else if (i == 11)
        {
            var u = i + 3;
            sum += Number($("tr").eq(i).children("td").eq(j).text());
            for (i = 12; i < u; i++) {
                sum += Number($("tr").eq(i).children("td").eq(j - 1).text());
            }
            return sum.toFixed(6);
        }
        else {
            sum += Number($("tr").eq(i).children("td").eq(j).text());
            return sum.toFixed(6);
        }
    }
    //决策信息熵e
    function eSum(i, j)
    {
        var sum = 0;
        if (i == 1)
        {
            var v = i;
            var u = i + 3;
            sum += Number($("tr").eq(i).children("td").eq(j).text());
            for (i = 2; i < u; i++) {
                sum += Number($("tr").eq(i).children("td").eq(j - 1).text());
            }
            if (sum == 0) {
                return 0;
            }
            else
            {
                var count = 0;
                if (Number($("tr").eq(v).children("td").eq(j).text()) / sum != 0)
                {
                    count += (Number($("tr").eq(v).children("td").eq(j).text()) / sum) * Math.log(Number($("tr").eq(v).children("td").eq(j).text()) / sum);
                }
                for (v = 2; v < 4; v++ )
                {
                    if (Number($("tr").eq(v).children("td").eq(j - 1).text()) / sum != 0)
                    {
                        count += (Number($("tr").eq(v).children("td").eq(j - 1).text()) / sum) * Math.log(Number($("tr").eq(v).children("td").eq(j - 1).text()) / sum);
                    }
                }
                var w = (-1 / Math.log(3)) * count;
                return w.toFixed(6);
            }
        }
        else if (i == 4)
        {
            var v = i;
            var u = i + 4;
            sum += Number($("tr").eq(i).children("td").eq(j).text());
            for (i = 5; i < u; i++) {
                sum += Number($("tr").eq(i).children("td").eq(j - 1).text());
            }
            if (sum == 0) {
                return 0;
            }
            else
            {
                var count = 0;
                if (Number($("tr").eq(v).children("td").eq(j).text()) / sum != 0)
                {
                    count += (Number($("tr").eq(v).children("td").eq(j).text()) / sum) * Math.log(Number($("tr").eq(v).children("td").eq(j).text()) / sum);
                }
                for (v = 5; v < 8; v++ )
                {
                    if (Number($("tr").eq(v).children("td").eq(j - 1).text()) / sum != 0)
                    {
                        count += (Number($("tr").eq(v).children("td").eq(j - 1).text()) / sum) * Math.log(Number($("tr").eq(v).children("td").eq(j - 1).text()) / sum);
                    }
                }
                var w = (-1 / Math.log(4)) * count;
                return w.toFixed(6);
            }
        }
        else if (i == 8)
        {
            var v = i;
            var u = i + 3;
            sum += Number($("tr").eq(i).children("td").eq(j).text());
            for (i = 9; i < u; i++) {
                sum += Number($("tr").eq(i).children("td").eq(j - 1).text());
            }
            if (sum == 0) {
                return 0;
            }
            else
            {
                var count = 0;
                if (Number($("tr").eq(v).children("td").eq(j).text()) / sum != 0)
                {
                    count += (Number($("tr").eq(v).children("td").eq(j).text()) / sum) * Math.log(Number($("tr").eq(v).children("td").eq(j).text()) / sum);
                }
                for (v = 9; v < 11; v++ )
                {
                    if (Number($("tr").eq(v).children("td").eq(j - 1).text()) / sum != 0)
                    {
                        count += (Number($("tr").eq(v).children("td").eq(j - 1).text()) / sum) * Math.log(Number($("tr").eq(v).children("td").eq(j - 1).text()) / sum);
                    }
                }
                var w = (-1 / Math.log(3)) * count;
                return w.toFixed(6);
            }
        }
        else if (i == 11)
        {
            var v = i;
            var u = i + 3;
            sum += Number($("tr").eq(i).children("td").eq(j).text());
            for (i = 12; i < u; i++) {
                sum += Number($("tr").eq(i).children("td").eq(j - 1).text());
            }
            if (sum == 0) {
                return 0;
            }
            else
            {
                var count = 0;
                if (Number($("tr").eq(v).children("td").eq(j).text()) / sum != 0)
                {
                    count += (Number($("tr").eq(v).children("td").eq(j).text()) / sum) * Math.log(Number($("tr").eq(v).children("td").eq(j).text()) / sum);
                }
                for (v = 12; v < 14; v++ )
                {
                    if (Number($("tr").eq(v).children("td").eq(j - 1).text()) / sum != 0)
                    {
                        count += (Number($("tr").eq(v).children("td").eq(j - 1).text()) / sum) * Math.log(Number($("tr").eq(v).children("td").eq(j - 1).text()) / sum);
                    }
                }
                var w = (-1 / Math.log(3)) * count;
                return w.toFixed(6);
            }
        }
        else {
            return 0;
        }
    }
    //	熵权
    function shangQuan(i)
    {
        var sum = Number($("#n1").text()) + Number($("#n4").text()) + Number($("#n8").text()) + Number($("#n11").text());
        var s = 0;
        switch (i)
        {
            case 1:
                s += (1 - Number($("#n1").text())) / (4 - sum);
                break;
            case 4:
                s += (1 - Number($("#n4").text())) / (4 - sum);
                break;
            case 8:
                s += (1 - Number($("#n8").text())) / (4 - sum);
                break;
            case 11:
                s += (1 - Number($("#n11").text())) / (4 - sum);
                break;
        }
        return s.toFixed(6);
    }
    //最终商权
    function finalWi(i, j)
    {
        var s = 0;
        if (i == 1 || i == 4 || i == 8 || i == 11 || i == 14) {
            s = Number($("tr").eq(i).children("td").eq(j - 1).text()) 
        }
        else {
            s = Number($("tr").eq(i).children("td").eq(j - 2).text()) 
        }
        var sum = 0;
        if (i == 1 || i == 2 || i == 3)
        {
            i = 1;
            var v = i;
            var u = i + 3;
            sum += Number($("tr").eq(i).children("td").eq(j - 1).text());
            for (i = 2; i < u; i++) {
                sum += Number($("tr").eq(i).children("td").eq(j - 2).text());
            }
            if (sum == 0) {
                return 0;
            }
            else
            {
                var z = s / sum * (Number($("#m1").text()) + Number($("#o1").text())) / 2;
                return z.toFixed(6);
            }
        }
        else if (i == 4 || i == 5 || i == 6 || i == 7)
        {
            i = 4;
            var v = i;
            var u = i + 4;
            sum += Number($("tr").eq(i).children("td").eq(j - 1).text());
            for (i = 5; i < u; i++) {
                sum += Number($("tr").eq(i).children("td").eq(j - 2).text());
            }
            if (sum == 0) {
                return 0;
            }
            else
            {
                var z = s / sum * (Number($("#m4").text()) + Number($("#o4").text())) / 2;
                return z.toFixed(6);
            }
        }
        else if (i == 8 || i == 9 || i == 10)
        {
            i = 8;
            var v = i;
            var u = i + 3;
            sum += Number($("tr").eq(i).children("td").eq(j - 1).text());
            for (i = 9; i < u; i++) {
                sum += Number($("tr").eq(i).children("td").eq(j - 2).text());
            }
            if (sum == 0) {
                return 0;
            }
            else
            {
                var z = s / sum * (Number($("#m8").text()) + Number($("#o8").text())) / 2;
                return z.toFixed(6);
            }
        }
        else if (i == 11 || i == 12 || i == 13)
        {
            i = 11;
            var v = i;
            var u = i + 3;
            sum += Number($("tr").eq(i).children("td").eq(j - 1).text());
            for (i = 12; i < u; i++) {
                sum += Number($("tr").eq(i).children("td").eq(j - 2).text());
            }
            if (sum == 0) {
                return 0;
            }
            else
            {
                var z = s / sum * (Number($("#m11").text()) + Number($("#o11").text())) / 2;
                return z.toFixed(6);
            }
        }
        else {
            var ahp = $("tr").eq(14).children("td").eq(12).text();
            return ahp / 2;
        }
    }
    function finallyWi(i)
    {
        var s = 0;
        switch (i)
        {
            case 1:
                s += (Number($("#m1").text()) + Number($("#o1").text())) / 2;
                break;
            case 4:
                s += (Number($("#m4").text()) + Number($("#o4").text())) / 2;
                break;
            case 8:
                s += (Number($("#m8").text()) + Number($("#o8").text())) / 2;
                break;
            case 11:
                s += (Number($("#m11").text()) + Number($("#o11").text())) / 2;
                break;
            default:
                s += (Number($("#m14").text()) + Number($("#o14").text())) / 2;
                break;
        }
        return s.toFixed(6);
    }
    //创新系数
    function innovation(i, j)
    {
        var s = 0;
        if (i == 1 || i == 4 || i == 8 || i == 11) {
            s = (1 - Number(finalWi(i, j))) * 100;
        }
        else if (i == 2 || i == 5 || i == 9 || i == 12) {
            s = (1 - Number(finalWi(i, j))) * 80;
        }
        else if (i == 3 || i == 6 || i == 10 || i == 13) {
            s = (1 - Number(finalWi(i, j))) * 60;
        }
        else {
            s = (1 - Number(finalWi(i, j))) * 20;
        }
        return s.toFixed(6);
    }
    //得分
    function getScore(i, j)
    {
        var score = 0;
        var s = 0;
        if (i == 1 || i == 4 || i == 8 || i == 11 || i == 14) {
            s = Number($("tr").eq(i).children("td").eq(j - 1).text()) 
        }
        else {
            s = Number($("tr").eq(i).children("td").eq(j - 2).text()) 
        }
        var xs = innovation(i, j);
        score = s * Number(xs);
        return score.toFixed(6);
    }
    //总得分
    function sumScore()
    {
        var sum = 0;
        for (var i = 1; i < l - 2; i++)
        {
            var j = 8;
            if ($("tr").eq(i).children("td").length > $("tr").eq(i + 1).children("td").length)
            {
                if ($("tr").eq(i).children("td").eq(j - 1).text() > 0) {
                    sum += Number($("tr").eq(i).children("td").eq(j + 10).text());
                }
                else {
                    sum += Number($("tr").eq(i).children("td").eq(j + 10).text());
                }
            }
            else
            {
                if ($("tr").eq(i).children("td").eq(j - 1).text() > 0) {
                    sum += Number($("tr").eq(i).children("td").eq(j + 5).text());
                }
                else {
                    sum += Number($("tr").eq(i).children("td").eq(j + 5).text());
                }
            }
        }
        return sum.toFixed(6);
    }
})